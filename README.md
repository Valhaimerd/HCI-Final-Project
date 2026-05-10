# HCI Farm

Static deployment shell prepared for GitHub Pages and Netlify.

## Local preview

Open `site/index.html` directly in a browser, or run a simple local server:

```powershell
python -m http.server 8000 -d site
```

Then visit `http://localhost:8000`.

## Deployment

This repository includes:

- `.github/workflows/pages.yml` for GitHub Pages
- `netlify.toml` for Netlify

Both publish the `site/` folder. In GitHub, set **Pages > Source** to **GitHub Actions** if it is not already selected.

See `IMPLEMENTATION_READINESS.md` before building the mock deployed system.
