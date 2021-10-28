---
display-order: 1
locale: fr_FR
length: 45
pub_date: "2021-10-26"
speakers:
  - aymeric_bouillat
fr_FR:
  title: "Serveurs Web et webperf sont dans un bateau"
  description: >-
    Et si nous parlions de configuration des serveurs Web (Apache/Nginx) et des éléments qui peuvent impacter certains KPI (ex: TTFB) ? Ayant effectuer un grand nombre de migrations SEO, j'ai souvent rencontré plusieurs problématiques en terme de redirections 301 :


    - fichiers <code>.htaccess</code> long comme le bras

    - ordre des règles

    - impact des règles statiques vs. regexp


    Durant cette intervention, je vous parlerai de certains paramètres pouvant faciliter le temps de réponse du serveur (utilisation du flag [SKIP] Apache, Vhost et AllowOverride, etc.) et de certains en-têtes HTTP (avec directives SEO) pour éviter de passer par l'applicatif (X-Robots-Tag, Canonical, etc.) et limiter les requêtes en bases de données. Nous parlerons aussi du module PageSPeed, avec des exemples concrets sur ses avantages et inconvénients ou biais.
  slides: ~
  video: ~
en_US:
  title: "Web Servers and Webperf in the Same Boat"
  description: >-
    Let's talk about web server configuration (Apache/Nginx) and elements that can impact some KPIs (e.g. TTFB)? Having done a lot of SEO migrations, I often encountered several issues in terms of 301 redirects:


    - long <code>.htaccess</code> files

    - rules order

    - impact of static rules vs. regexp


    During this talk, I will talk about some parameters that can ease server response time (use of Apache [SKIP] flag, Vhost and AllowOverride, etc.) and some HTTP headers (with SEO directives) to avoid going through the application (X-Robots-Tag, Canonical, etc.) and limit database queries. We will also talk about the PageSPeed module, with concrete examples on its advantages and disadvantages or biases.
  slides: ~
  video: ~
---
