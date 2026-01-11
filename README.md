# 📐 MathArchive

![License](https://img.shields.io/badge/license-MIT-green)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![Last Commit](https://img.shields.io/github/last-commit/<USERNAME>/<REPO>)

**MathArchive** est une plateforme statique légère conçue pour l'archivage, la navigation et la consultation de notes mathématiques rédigées en LaTeX. Le projet mise sur la rapidité de [Vite](https://vitejs.dev) et la performance de [KaTeX](https://katex.org) pour offrir un rendu mathématique fluide directement dans le navigateur.

---

## 🚀 Fonctionnalités

- **Explorateur Dynamique** : Navigation intuitive à travers différents modules (Algèbre, Calcul, etc.).
- **Rendu Haute Performance** : Utilisation de KaTeX pour un affichage instantané des formules complexes.
- **Support PDF** : Intégration et consultation de documents via un fichier de configuration JSON.
- **Typage Fort** : Développement entièrement réalisé en [TypeScript](https://www.typescriptlang.org).

---

## 📂 Structure du Projet

```text
.
├── public/                  # Assets statiques (CSS, pdfs.json, pdf, tex, et assets)
│   ├── algebre1/            # Fichiers .tex sources par sujet
│   │   ├── EquationLineaireEtMatrice.pdf
│   │   └── TheorieNaiveEnsemble.pdf
│   └── algebre2/            
│       ├── espaces_quotients.pdf
│       └── forme_quadratique.pdf
├── src/                     # Logique TypeScript (main.ts, explorer.ts)
│   ├── explorer.ts          # TypeScript pour générer la liste dynamique
│   └── pdf-list.json        # JSON des fichiers PDF
├── index.html               # Page d’accueil
├── explorer.html            # Interface de l'explorateur
├── style.css                # Styles globaux et pour l’explorateur
├── package.json             # Dépendances et scripts
├── tsconfig.json
└── README.md
```

---

## 🛠️ Installation et Utilisation

### Prérequis

Assurez-vous d'avoir installé Node.js (version LTS recommandée).

1. Cloner le dépôt :

```bash
git clone https://github.com/TTifanioh/MathArchive.git
cd MathArchive
```

2. Installer les dépendances :

```bash
npm install
```

3. Développement local  
Lance le serveur de développement avec rechargement à chaud (HMR) :

```bash
npm run dev
```

4. Build Production  
Génère les fichiers statiques optimisés dans le dossier `dist/` :

```bash
npm run build
# Tester le build localement
npm run preview
```

---

## ⚙️ Configuration des données

Pour ajouter de nouveaux documents, modifiez le fichier `public/pdfs.json`. Ce fichier sert de base de données à l'explorateur pour lier les sujets aux fichiers correspondants.

---

### 🤝 Contribution

1. Forkez le projet.
2. Créez une branche dédiée :  

```bash
git checkout -b feature/nouvelle-fonctionnalite
```

3. Commitez vos changements :  

```bash
git commit -m 'Ajout d'une fonctionnalité'
```

4. Poussez vers la branche :  

```bash
git push origin feature/nouvelle-fonctionnalite
```

5. Ouvrez une **Pull Request**

---

## 📄 Licence

Ce projet est sous licence [MIT](./LICENSE). Vous êtes libre de l'utiliser, de le modifier et de le distribuer. Consultez le fichier LICENSE pour plus de détails.