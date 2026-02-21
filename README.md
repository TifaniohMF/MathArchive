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
<<<<<<< HEAD
├── explorer.html				# Point d'entrée secondaire
├── index.html					# Point d'entrée principal
├── LICENSE					# Scripts et dépendances
├── package.json				# Configuration TypeScript
├── package-lock.json
├── public					# Ressources brutes (copiées telles quelles dans dist/)
│   ├── algebre1				# PDFs et sources .tex
│   │   ├── EquationLineaireEtMatrice.pdf
│   │   ├── EquationLineaireEtMatrice.tex
│   │   ├── EspaceVectEtSousEspaceVect.pdf
│   │   ├── EspaceVectEtSousEspaceVect.tex
│   │   ├── IntoTheorieAnneau.pdf
│   │   ├── IntoTheorieAnneau.tex
│   │   ├── IntroTherieGroupe.pdf
│   │   ├── IntroTherieGroupe.tex
│   │   ├── TheorieNaiveEnsemble.pdf
│   │   └── TheorieNaiveEnsemble.tex
│   ├── algebre2
│   │   ├── espace_euclidien_hermitien.pdf
│   │   ├── espace_euclidien_hermitien.tex
│   │   ├── espaces_quotients.pdf
│   │   ├── espaces_quotients.tex
│   │   ├── forme_quadratique.pdf
│   │   ├── forme_quadratique.tex
│   │   ├── reduction_matrice.pdf
│   │   └── reduction_matrice.tex
│   ├── CalculNum
│   │   ├── algorithms_complexite.pdf
│   │   ├── algorithms_complexite.tex
│   │   ├── ResolutionEquationNonLineaire.pdf
│   │   ├── ResolutionEquationNonLineaire.tex
│   │   ├── resolution_system_linear.pdf
│   │   └── resolution_system_linear.tex
│   ├── Exercice
│   │   ├── exo_algebre1.pdf
│   │   ├── exo_algebre1.tex
│   │   ├── exo_calnum1.pdf
│   │   ├── exo_calnum1.tex
│   │   ├── exo_calnum2.pdf
│   │   ├── exo_calnum2.tex
│   │   ├── exo_calnum3.pdf
│   │   └── exo_calnum3.tex
│   └── favicon.ico				# Icône du site
├── README.md
├── src
│   ├── data
│   │   └── pdfs.json				# Importé via 'import data from "./data/pdfs.json"'
│   ├── explorer.ts				# Logique de la page explorer.html
│   ├── main.ts					# Logique de la page index.html
│   └── style
│       ├── explorer.css
│       └── style.css
├── tsconfig.json
└── vite.config.ts				# Configuration multi-pages
=======
## 📂 Structure du Projet

```text
.
├── public/                  # Ressources brutes (copiées telles quelles dans dist/)
│   ├── algebre1/            # PDFs et sources .tex
│   ├── algebre2/            
│   ├── CalculNum/           
│   ├── Exercice/            
│   └── favicon.ico          # Icône du site
├── src/                     # Code source transformé par le compilateur
│   ├── style/               
│   │   ├── style.css     
│   │   └── explorer.css
│   ├── data/               
│   │   └── pdfs.json        # Importé via 'import data from "./data/pdfs.json"'
│   ├── explorer.ts          # Logique de la page explorer.html
│   └── main.ts              # Logique de la page index.html
├── index.html               # Point d'entrée principal
├── explorer.html            # Point d'entrée secondaire
├── package.json             # Scripts et dépendances
├── tsconfig.json            # Configuration TypeScript
└── vite.config.ts           # Configuration multi-pages
>>>>>>> b1b60b01d882d367effd7fa437b06de31f2e6ff3
```
---

## 🛠️ Installation et Utilisation

### Prérequis

Assurez-vous d'avoir installé Node.js (version LTS recommandée).

1. Cloner le dépôt :

```bash
git clone https://github.com/TifaniohMF/MathArchive.git
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
