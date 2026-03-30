# tenerra-context
Context site for context.anya.tenerra.ai

## Quick start

1. Install dependencies:

	npm install

2. Run local dev server:

	npm run dev

3. Build static output:

	npm run build

Generated output is written to `_site/`.

## Content model

- Add or edit articles in `articles/<slug>/index.md`.
- Put article-specific files in `articles/<slug>/assets/`.
- Put shared assets in `public/`.
- Shared page layout lives in `_includes/base.html`.
