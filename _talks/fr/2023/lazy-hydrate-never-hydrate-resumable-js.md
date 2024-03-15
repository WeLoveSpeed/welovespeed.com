---
display-order: 4
talk_locale: fr_FR
i18n-key: 2023-talk-lazy-hydrate-never-hydrate-resumable-js
length: 25
questions: true
pub_date: "2023-03-15"
speakers:
  - kevin_raynel
  - martin_guillier
title: "Lazy Hydrate, Never Hydrate, Resumable JS"
subtitle: "les astuces des frameworks pour réduire le Total Blocking Time"
excerpt: >-
  Comment éviter que le Total Blocking Time (TBT) ne souffre pendant la phase de réhydratation qui suit le Server-Side Rendering (SSR) ?
description: >-
  Le Total Blocking Time est la métrique Core Web Vital qui pèse le plus dans votre score Lighthouse, avec 30% de la note finale. Que vous soyez curieux de comprendre ce qui se cache derrière cet indicateur ou que vous vous soyez déjà cassé les dents à essayer de l’optimiser, ce talk est pour vous !


  Le rendu Server-Side Rendering (SSR) de frameworks front comme React ou Vue permet d’afficher une page HTML pré-construite. Cela optimise le Largest Contentful Paint et le Cumulative Layout Shift. Cependant, une fois cette première étape d’affichage réalisée, il reste à rendre le site dynamique : c’est la phase d’hydratation. Cette phase instancie l’ensemble des composants de la page avec leurs données et tous les listeners associés.


  Comment mesurer l’impact de cette phase sur le Total Blocking Time ? Est-ce que l’hydratation est la seule source de blocking time ? Comment mettre concrètement en pratique la recommandation d'alléger le thread principal ? Quelle est la réponse à cette lourde phase d’hydratation proposée par les framework front les plus récents comme Astro ou Qwik ?


  Je vous propose de répondre à ces questions au travers d’exemples concrets tirés de 6 mois d’accompagnement d’un site e-commerce à grande fréquentation (top 10 français), avec comme résultat une amélioration de 25% de leur TBT et 20 points de gagnés sur leur score de performance Lighthouse.
slides:
  name: ~
  url: ~
video:
  name: ~
  url: https://youtu.be/2b48sOTD4dc
---
