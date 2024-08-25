---
display-order: 1
talk_locale: en_US
i18n-key: 2024-talk-how-browsers-really-load-web-pages
length: 45
pub_date: "2024-07-15"
speakers:
  - robin_marx
title: "Comment les navigateurs chargent VRAIMENT les pages web"
subtitle: ~
excerpt: |
  Lorsque les navigateurs chargent une page web, il se passe BEAUCOUP de choses sous le capot. En examinant beaucoup de cascades différentes, cette conférence présente comment les diagnostiquer à l'aide d'outils avancés et comment influencer leur chargement. Vous repartirez avec une meilleur compréhension du fonctionnement des navigateurs qui vous permettra de régler les problèmes de chargement et faire face à leurs bizarreries.
description: |
  Lorsque les navigateurs chargent une page web et ses ressources, il se passe BEAUCOUP de choses sous le capot. Ils doivent prendre en compte les ressources bloquantes pour le rendu et le parsing, utiliser un <span lang="en">preload scanner</span>, prendre en compte les indices de ressources (comme preload/preconnect), les modificateurs de chargement (async/defer/module), fetchpriority, les images responsives, et bien d'autres choses encore. Sur la base de tous ces signaux, ils doivent ensuite décider d'une manière ou d'une autre quand charger quelles ressources, afin d'utiliser de manière optimale les connexions modernes HTTP/2 et HTTP/3. Et, comme vous l'avez peut-être deviné, aucun des navigateurs ne le fait de la même manière (et c'est peu dire !).

  Cette conférence présente en profondeur la façon dont les navigateurs décident quand charger une ressource spécifique, et toutes les façons dont vous pouvez les influencer pour modifier leur comportement (afin de s'assurer que cette image importante pour le LCP est réellement l'une des premières choses à charger !) Nous examinerons BEAUCOUP de cascades différentes et explorerons les raisons pour lesquelles elles sont ainsi, comment diagnostiquer ces problèmes vous-même avec des outils avancés (comme WebPageTest, Debugbear, Chrome netlogs et peut-être même *gasp* Wireshark) et comment résoudre les problèmes courants (non, ne préchargez pas tout avec fetchpriority=high, monstre !)

  Vous repartirez avec une meilleure compréhension de ce qui se passe sous le capot, ce qui vous permettra de mieux gérer les différents problèmes et bizarreries présents dans les navigateurs d'aujourd'hui et les fonctionnalités de chargement de ressources.
slides:
  name: ~
  url: ~
video:
  name: ~
  url: ~
---
