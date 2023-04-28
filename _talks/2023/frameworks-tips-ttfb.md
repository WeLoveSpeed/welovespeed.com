---
display-order: 1
locale: fr_FR
length: 25
questions: true
pub_date: "2023-03-15"
speakers:
  - kevin_raynel
  - martin_guillier
fr_FR:
  title: "Lazy Hydrate, Never Hydrate, Resumable JS"
  subtitle: ": les astuces des frameworks pour réduire le Total Blocking Time"
  excerpt: >-
    Comment éviter que le Total Blocking Time (TBT) ne souffre pendant la phase de réhydratation qui suit le Server-Side Rendering (SSR) ?
  description: >-
    Le Total Blocking Time est la métrique Core Web Vital qui pèse le plus dans votre score Lighthouse, avec 30% de la note finale. Que vous soyez curieux de comprendre ce qui se cache derrière cet indicateur ou que vous vous soyez déjà cassé les dents à essayer de l’optimiser, ce talk est pour vous !


    Le rendu Server-Side Rendering (SSR) de frameworks front comme React ou Vue permet d’afficher une page HTML pré-construite. Cela optimise le Largest Contentful Paint et le Cumulative Layout Shift. Cependant, une fois cette première étape d’affichage réalisée, il reste à rendre le site dynamique : c’est la phase d’hydratation. Cette phase instancie l’ensemble des composants de la page avec leurs données et tous les listeners associés.


    Comment mesurer l’impact de cette phase sur le Total Blocking Time ? Est-ce que l’hydratation est la seule source de blocking time ? Comment mettre concrètement en pratique la recommandation d'alléger le thread principal ? Quelle est la réponse à cette lourde phase d’hydratation proposée par les framework front les plus récents comme Astro ou Qwik ?


    Je vous propose de répondre à ces questions au travers d’exemples concrets tirés de 6 mois d’accompagnement d’un site e-commerce à grande fréquentation (top 10 français), avec comme résultat une amélioration de 25% de leur TBT et 20 points de gagnés sur leur score de performance Lighthouse.
  slides: ~
  video: ~
en_US:
  title: "Lazy Hydrate, Never Hydrate, Resumable JS"
  subtitle: ": frameworks' techniques to reduce Total Blocking Time"
  excerpt: >-
    How to prevent Total Blocking Time (TBT) from suffering during the post Server-Side Rendering (SSR) rehydration phase?
  description: >-
    Total Blocking Time is the Core Web Vital metric that weighs the most in your Lighthouse score, with 30% of the final score. Whether you're curious to understand what's behind this metric or you've already busted your butt trying to optimize it, this talk is for you!


    SSR rendering of front-end frameworks like React or Vue can display a pre-built HTML page to optimize the Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS). However, once this first display step is done, you still have to make the site dynamic: this is the hydration phase. This phase instantiates all the components of the page with their data and all the associated listeners.


    How to measure the impact of this phase on the Total Blocking Time?  Is hydration the only source of blocking time? How to concretely put into practice the recommendation to lighten the main thread? What is the answer to this heavy hydration phase proposed by the most recent front-end frameworks like Astro or Qwik?


    Let's answer these questions through concrete examples taken from 6 months of support of a high traffic e-commerce site (French top 10), with as a result a 25% improvement of their TBT and 20 points gained on their Lighthouse performance score.
  slides: ~
  video: ~
---
