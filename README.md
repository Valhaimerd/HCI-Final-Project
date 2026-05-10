# HCI Farm

Static site prepared for GitHub Pages.

## Local preview

Open `index.html` directly in a browser, or run a simple local server:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages deployment

This repository includes `.github/workflows/pages.yml`, which publishes the repository root to GitHub Pages whenever changes are pushed to `master`.

In the GitHub repository settings, set **Pages > Source** to **GitHub Actions** if it is not already selected.
