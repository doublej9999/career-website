# Workflows

## CI (ci.yml)
- Triggers: `push`, `pull_request`
- Steps: checkout → setup node → install → build
- Required status check: **ci** (protected main)

## Deploy (deploy.yml)
- Trigger: `push` to `main`
- Builds `dist` and deploys via GitHub Pages
- Uses: `actions/upload-pages-artifact` + `actions/deploy-pages`
