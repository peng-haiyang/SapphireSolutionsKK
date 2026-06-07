# Sapphire Solutions K.K.

Professional bilingual website for Sapphire Solutions K.K., an AI Change Management Advisory company based in Tokyo, Japan.

## Publish With GitHub Pages

1. Push this repository to GitHub.
2. In GitHub, open **Settings > Pages**.
3. Set **Build and deployment** to **GitHub Actions**.
4. The included workflow deploys the Jekyll site whenever `main` is updated.

## Manage Blog Posts

Add Markdown files to `_posts` using this format:

```md
---
layout: post
title: English title
title_ja: Japanese title
category: AI Governance
category_ja: AIガバナンス
excerpt_en: Short English summary.
excerpt_ja: 短い日本語要約。
author: Dr. Haiyang Peng
---

Article content here.
```

## Configure Forms and Analytics

Edit `_config.yml`:

- `company.form_endpoint`: add a Formspree, Basin, Netlify Forms, or other static form endpoint.
- `company.google_analytics_id`: add a Google Analytics measurement ID such as `G-XXXXXXXXXX`.
- `company.linkedin`: update the LinkedIn profile URL if needed.
