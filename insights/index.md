---
title: Insights
description: Articles and perspectives on AI, organizational change, healthcare innovation, analytics, and leadership.
---

<section class="page-hero">
  <p class="eyebrow" data-i18n-en="Insights" data-i18n-ja="インサイト">Insights</p>
  <h1 data-i18n-en="Ideas for leaders building responsible AI capabilities." data-i18n-ja="責任あるAI能力を構築するリーダーのための知見。">Ideas for leaders building responsible AI capabilities.</h1>
</section>

<section class="section">
  <div class="post-list">
    {% for post in site.posts %}
      <a class="insight-card" href="{{ post.url | relative_url }}">
        <span class="meta">{{ post.category | default: "Insight" }}</span>
        <h2 data-i18n-en="{{ post.title }}" data-i18n-ja="{{ post.title_ja | default: post.title }}">{{ post.title }}</h2>
        <p data-i18n-en="{{ post.excerpt_en | default: post.excerpt | strip_html | strip_newlines }}" data-i18n-ja="{{ post.excerpt_ja | default: post.excerpt_en }}">{{ post.excerpt_en | default: post.excerpt | strip_html }}</p>
      </a>
    {% endfor %}
  </div>
</section>
