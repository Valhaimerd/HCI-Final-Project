# Implementation Readiness

This repository is prepared for a static mock deployed system for the IT58 HCI project:
**Pest and Disease Advisory Module: AI Decision Support for Rice Farmers**.

## Deployment Target

- Public site source: `site/`
- GitHub Pages: `.github/workflows/pages.yml` publishes `site/`
- Netlify: `netlify.toml` publishes `site/`
- No package install or build step is required yet
- Source documents remain outside the deployed folder

## Prototype Requirement From Documents

The final deliverable may use either a Figma prototype or a deployed system link. The deployed mock should include a clickable URL and enough working screens to demonstrate the intended system behavior.

Required prototype coverage:

- 5 to 8 UI screens minimum
- Mobile-first rice farmer workflow
- Consent and privacy screen
- Camera guide or image upload simulation
- Review image and analysis state
- Explainable diagnosis result
- Treatment, prevention, and best-practice advice
- Human override: accept, reject, retake, report error, consult technician
- Feedback/audit flow
- Accessibility support such as large readable text, high contrast, simple labels, and optional read-aloud behavior

## Recommended Static Mock Architecture

Use plain HTML, CSS, and JavaScript unless a framework is intentionally added later.

Suggested structure:

```text
site/
  index.html
  styles.css
  app.js
  data/
    diagnoses.json
    technicians.json
    audit-events.json
  assets/
```

The mock can run fully in the browser on GitHub Pages and Netlify. Image recognition should be simulated with mock data rather than a live model.

## Mock Data Contract

The prototype should model these entities:

- `diagnoses`: condition name, type, confidence, severity, explanation, visual evidence label, alternatives, treatments, prevention steps, best practices, warning text
- `sampleImages`: image label, crop stage, quality status, expected diagnosis id
- `technicians`: name, area, availability, contact action label
- `auditEvents`: event id, timestamp, consent status, model version, prediction id, user action, feedback outcome
- `consentState`: required analysis consent, optional history saving, optional anonymized model-improvement consent, optional technician sharing

## Expected Demo Flow

1. Welcome or home screen
2. Consent choices
3. Camera guide or sample image picker
4. Image review
5. Analyzing state
6. Diagnosis with confidence, alternatives, and explanation
7. Advice with treatment and prevention steps
8. Feedback/report/consult technician path

## Deployment Notes

- Keep deployable files inside `site/`
- Use relative paths like `assets/name.svg`, not absolute root paths
- Avoid backend-only features because GitHub Pages is static hosting
- Netlify redirects unknown routes to `index.html` for future single-page navigation
- Do not expose private source notes or raw submission documents inside `site/`
