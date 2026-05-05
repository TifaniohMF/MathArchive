/** Formate les chemins (snake_case/CamelCase) en titres lisibles */
export function formatFileName(path: string): string {
  const fileName = (path || '').split('/').pop() || '';
  // Remove multiple extensions like .tar.gz or .pdf.tex
  const base = fileName.replace(/(\.[a-z0-9]+)+$/i, '');
  const withSpaces = base.replace(/[_-]+/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2');
  const cleaned = withSpaces.trim().toLowerCase();
  if (!cleaned) return '';
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

/** Logique de filtrage commune pour la barre de recherche */
export function filterList(list: string[], query: string): string[] {
  const lowerQuery = query.toLowerCase();
  return list.filter(path => 
    formatFileName(path).toLowerCase().includes(lowerQuery)
  );
}

/** Initialise l'écouteur de recherche */
export function setupSearch(input: HTMLInputElement | null, onSearch: (query: string) => void) {
  input?.addEventListener("input", () => onSearch(input.value));
}
