---
display-order: 1
talk_locale: fr_FR
i18n-key: 2023-talk-lazy-hydrate-never-hydrate-resumable-js
length: 25
questions: true
pub_date: "2023-03-15"
speakers:
  - kevin_raynel
  - martin_guillier
title: "Lazy Hydrate, Never Hydrate, Resumable JS"
subtitle: "frameworks' techniques to reduce Total Blocking Time"
excerpt: >-
  How to prevent Total Blocking Time (TBT) from suffering during the post Server-Side Rendering (SSR) rehydration phase?
description: >-
  Total Blocking Time is the Core Web Vital metric that weighs the most in your Lighthouse score, with 30% of the final score. Whether you're curious to understand what's behind this metric or you've already busted your butt trying to optimize it, this talk is for you!


  SSR rendering of front-end frameworks like React or Vue can display a pre-built HTML page to optimize the Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS). However, once this first display step is done, you still have to make the site dynamic: this is the hydration phase. This phase instantiates all the components of the page with their data and all the associated listeners.


  How to measure the impact of this phase on the Total Blocking Time?  Is hydration the only source of blocking time? How to concretely put into practice the recommendation to lighten the main thread? What is the answer to this heavy hydration phase proposed by the most recent front-end frameworks like Astro or Qwik?


  Let's answer these questions through concrete examples taken from 6 months of support of a high traffic e-commerce site (French top 10), with as a result a 25% improvement of their TBT and 20 points gained on their Lighthouse performance score.
slides:
  name: ~
  url: ~
video:
  name: ~
  url: ~
---
