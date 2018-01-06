---
title: La Thym
description: "Une bienveillante bande de tisseurs de liens"
permalink: /thym/
---

<div class="wrapper" markdown="1">

<div class="cta-zone-1 section-margin">
  <div class="wrapper">
    <div class="text-center">
      <section>
        <h3 class="small-title-size">La Thym</h3>
        <div class="grid-4 text-center">
          {% assign members = site.data.thym_members | sort: "name" %}
          {% for member in members %}
          <section class="attendee">
            <figure class="attendee-avatar"><img src="https://twitter.com/{{ member.twitter }}/profile_image?size=bigger" alt="">
            </figure>
            <h3 class="attendee-name"><a href="https://twitter.com/{{ member.twitter }}">{{ member.name }}</a></h3>
          </section>
          {% endfor %}
        </div>
      </section>
    </div>
  </div>
</div>

</div>
