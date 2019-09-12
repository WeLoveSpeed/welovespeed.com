---
title: Contactez-nous
description: "Nous joindre"
i18n-key: contact
permalink: /contact/
layout: page
---

# {{ page.title }}

Vous avez une question, une suggestion ? N'hésitez pas à nous envoyer un message.

<form id="contact-form" netlify-honeypot="cb" class="page__form js-form form" method="POST" action="contact" data-netlify="true">
  <fieldset>
    <label for="email">Votre email (obligatoire)&nbsp;:</label>
    <input type="email" name="email" id="email" required>
  </fieldset>
  <fieldset>
    <label for="message">Votre message (obligatoire)&nbsp;:</label>
    <textarea name="message" rows="10" id="message" required></textarea>
  </fieldset>
  <p><small>Note&nbsp;: bien que l'email soit obligatoire pour que nous vous réondions, n'hésitez pas à utiliser anonymous@anon.com si vous souhaitez rester anonyme.</small></p>
  <fieldset>
    <div data-netlify-recaptcha="true"></div>
    <button type="submit" class="button" data-text="envoyer">
      <span class="button-inner">envoyer</span>
    </button>
  </fieldset>
</form>
