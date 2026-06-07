---
title: Contact
description: Contact Sapphire Solutions K.K. for AI advisory, executive education, keynote speaking, and consultation requests.
---

<section class="page-hero">
  <p class="eyebrow" data-i18n-en="Contact" data-i18n-ja="お問い合わせ">Contact</p>
  <h1 data-i18n-en="Start a focused conversation about AI, change, and leadership." data-i18n-ja="AI、変革、リーダーシップについて具体的な対話を始めましょう。">Start a focused conversation about AI, change, and leadership.</h1>
</section>

<section class="section split">
  <div>
    <h2 data-i18n-en="Book a consultation" data-i18n-ja="相談を予約する">Book a consultation</h2>
    <p class="lead" data-i18n-en="Use the form for advisory inquiries, keynote requests, executive education programs, or collaboration opportunities." data-i18n-ja="アドバイザリー、基調講演、経営教育プログラム、協業機会についてフォームからお問い合わせください。">Use the form for advisory inquiries, keynote requests, executive education programs, or collaboration opportunities.</p>
    <ul class="list">
      <li><a href="mailto:{{ site.company.email }}">{{ site.company.email }}</a></li>
      <li><a href="{{ site.company.linkedin }}">LinkedIn</a></li>
      <li>{{ site.company.location }}</li>
    </ul>
  </div>
  <form class="form" action="{% if site.company.form_endpoint != '' %}{{ site.company.form_endpoint }}{% else %}mailto:{{ site.company.email }}{% endif %}" method="post" enctype="text/plain">
    <label class="field">
      <span data-i18n-en="Name" data-i18n-ja="お名前">Name</span>
      <input name="name" required data-placeholder-en="Your name" data-placeholder-ja="お名前" placeholder="Your name">
    </label>
    <label class="field">
      <span data-i18n-en="Email" data-i18n-ja="メール">Email</span>
      <input type="email" name="email" required data-placeholder-en="you@example.com" data-placeholder-ja="you@example.com" placeholder="you@example.com">
    </label>
    <label class="field">
      <span data-i18n-en="Organization" data-i18n-ja="組織名">Organization</span>
      <input name="organization" data-placeholder-en="Company or institution" data-placeholder-ja="会社名・機関名" placeholder="Company or institution">
    </label>
    <label class="field">
      <span data-i18n-en="Inquiry type" data-i18n-ja="お問い合わせ種別">Inquiry type</span>
      <select name="type">
        <option>AI advisory</option>
        <option>Keynote speaking</option>
        <option>Executive education</option>
        <option>Healthcare innovation</option>
        <option>Partnership</option>
      </select>
    </label>
    <label class="field">
      <span data-i18n-en="Message" data-i18n-ja="メッセージ">Message</span>
      <textarea name="message" required data-placeholder-en="Briefly describe your goals, audience, timing, and desired outcomes." data-placeholder-ja="目的、対象者、時期、期待する成果を簡単にご記入ください。" placeholder="Briefly describe your goals, audience, timing, and desired outcomes."></textarea>
    </label>
    <button class="button" type="submit" data-i18n-en="Send Inquiry" data-i18n-ja="送信する">Send Inquiry</button>
  </form>
</section>
