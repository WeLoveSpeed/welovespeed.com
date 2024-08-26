---
display-order: 1
talk_locale: en_US
i18n-key: 2024-talk-how-browsers-really-load-web-pages
length: 45
pub_date: "2024-07-15"
speakers:
  - robin_marx
title: "How browsers REALLY load Web pages"
subtitle: ~
excerpt: |
  When browsers load a web page, there's a LOT going on under the hood. By examining many different waterfalls, this talk shows how to diagnose them using advanced tools and how to influence their loading. You'll leave with a better understanding of how browsers work, enabling you to fix loading problems and deal with their quirks.
description: |
  When browsers load a Web page and its subresources, A LOT happens under the hood. They need to take into account render/parsing blocking resources, use a preload scanner, listen to resource hints (like preload/preconnect), loading modifiers (async/defer/module), fetchpriority, responsive images, and much more. Based on all those signals, they then need to somehow decide when to load which resources, to make optimal use of the modern HTTP/2 and HTTP/3 connections. And, as you might have guessed, none of the browsers do this in quite the same way (understatement alert!).

  This talk is a deep dive into how browsers decide when to load a specific resource, and all the ways in which you can influence them to modify their behaviour (so you can make sure that important LCP image is definitely one of the first things to come in!). We will look at A LOT of different waterfalls and discuss why each looks the way it does, how to diagnose these issues yourself with advanced tools (like WebPageTest, Debugbear, Chrome netlogs and maybe even *gasp* Wireshark) and how to solve common problems (no, don't just preload everything with fetchpriority=high, you monster!).

  You will walk away with a deeper understanding of what happens under the hood, which will allow you to better deal with the various gotchas and quirks present in today's browsers and resource loading features.
slides:
  name: ~
  url: ~
video:
  name: ~
  url: ~
---
