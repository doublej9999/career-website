# Career Website

Enterprise career website built with **React 18 + TypeScript + Vite + TailwindCSS**.

## ✨ Features
- Homepage with hero, stats, and culture sections
- Job list with filters
- Job detail view
- Login / Register UI
- Profile dashboard
- GitHub Actions CI + GitHub Pages deployment

## 🧱 Tech Stack
- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router
- Zustand
- Axios

## 📦 Project Structure
```
src
├── api
├── assets
├── components
├── hooks
├── layouts
├── pages
│   ├── Home
│   ├── JobList
│   ├── JobDetail
│   ├── Campus
│   ├── Login
│   └── Profile
├── router
├── store
├── mock
├── utils
├── App.tsx
└── main.tsx
```

## 📚 Documentation
- docs/STRUCTURE.md
- docs/WORKFLOWS.md
- docs/DEPLOYMENT.md
- docs/PRS.md

## 🚀 Development
```bash
npm install
npm run dev
```

## 🧪 Build
```bash
npm run build
npm run preview
```

## 📄 Deployment
GitHub Pages is published from `main` via GitHub Actions. Output directory: `dist`.

- URL: https://doublej9999.github.io/career-website/

## ✅ CI
Workflow: `.github/workflows/ci.yml`

- Trigger: `push`, `pull_request`
- Steps: `npm install` → `npm run build`

## 📌 Notes
- Vite base path is set to `/career-website/` for Pages.
