// documents.ts
import './style/explorer.css';
import 'katex/dist/katex.min.css';
// typed in src/types/katex-auto-render.d.ts
import renderMathInElement from 'katex/dist/contrib/auto-render';
import dataRaw from './data/topics.json';
import { formatFileName, filterList, setupSearch } from './utils';

const container = document.getElementById('tex-container') as HTMLDivElement | null;
const searchInput = document.getElementById('search') as HTMLInputElement | null;
const texList = (dataRaw as unknown) as string[];
const PREVIEW_LIMIT = 300;

async function renderLatexContent(path: string, element: HTMLElement) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);
  try {
    const response = await fetch(path, { signal: controller.signal });
    clearTimeout(timeout);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    let tex = await response.text();

    if (tex.includes('\\begin{document}')) {
      const parts = tex.split('\\begin{document}');
      if (parts.length > 1) tex = parts[1].split('\\end{document}')[0] || '';
    }

    const previewText = tex
      .replace(/\\maketitle/g, '')
      .replace(/\\section\{([^}]+)\}/g, '\\section:$1')
      .replace(/\\\\/g, '\n')
      .substring(0, PREVIEW_LIMIT);

    element.innerHTML = '';
    const wrapper = document.createElement('div');
    const lines = previewText.split('\n');

    lines.forEach((line) => {
      if (!line) return;
      if (line.startsWith('\\section:')) {
        const h = document.createElement('h3');
        h.style.margin = '10px 0';
        h.textContent = line.replace('\\section:', '');
        wrapper.appendChild(h);
        return;
      }
      const p = document.createElement('p');
      p.style.margin = '4px 0';
      p.textContent = line;
      wrapper.appendChild(p);
    });

    if (tex.length > PREVIEW_LIMIT) {
      const more = document.createElement('span');
      more.textContent = '...';
      wrapper.appendChild(more);
    }

    element.appendChild(wrapper);

    renderMathInElement(element, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
      ],
      throwOnError: false,
    });
  } catch (err) {
    element.innerHTML = '';
    const span = document.createElement('span');
    span.style.color = '#ff6b6b';
    span.textContent = '⚠️ Aperçu indisponible';
    element.appendChild(span);
    // eslint-disable-next-line no-console
    console.warn('renderLatexContent error for', path, err);
  } finally {
    clearTimeout(timeout);
  }
}

function render(list: string[]) {
  if (!container) return;
  container.innerHTML = list.length ? '' : `<p class="empty">😕 Aucun document</p>`;

  list.forEach((path) => {
    const realPath = path.endsWith('.tex') ? path : `${path}.tex`;
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="latex-display" style="padding:15px; background:#222; font-family:serif;">
        <div class="loading">Chargement...</div>
      </div>
      <div class="card-info">
        <span class="card-name">${formatFileName(path)}</span>
        <a class="download-btn" href="${realPath}">Lire</a>
      </div>`;
    container.appendChild(card);
    const display = card.querySelector('.latex-display') as HTMLElement | null;
    if (display) renderLatexContent(realPath, display);
  });
}

setupSearch(searchInput, (q) => render(filterList(texList, q)));
render(texList);
