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
    <label for="email">Votre email&nbsp;:</label>
    <input type="email" name="email" id="email">
  </fieldset>
  <fieldset>
    <label for="message">Votre message&nbsp;:</label>
    <textarea name="message" rows="" id="message" required></textarea>
  </fieldset>
  <p><small>Note&nbsp;: bien que l'email ne soit pas obligatoire, pensez à le renseigner si vous souhaitez que nous vous répondions.</small></p>
  <fieldset>
    <div data-netlify-recaptcha="true"></div>
    <button type="submit" class="button" data-text="Send">
      <span class="button-inner">Envoyer</span>
    </button>
  </fieldset>
</form>
