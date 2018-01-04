---
title: Le Manifeste de Sud Web
description: ""
permalink: /manifeste/
---

<div class="thanks-banner lozad" data-background-image="/assets/images/public-large.jpg"></div>

<div class="wrapper" markdown="1">

# {{ page.title }}

Voici les valeurs que nous partageons et véhiculons :

1. **S'immerger** chaque année dans une ville différente à la rencontre des acteurs locaux.
2. **Être** un évènement à taille humaine, avec moins de 150 participant·e·s.
3. **Réunir** une communauté de participant·e·s issu·e·s de divers métiers afin de bâtir une culture web commune.
4. **Encourager** la mixité, l'auto-organisation et le travail en petits groupes.
5. **Inviter** des personnes inspirantes, créatives et drôles, à travers notre curation.
6. **Veiller** à instaurer un cadre convivial et bienveillant pour tout le monde, sans distinction aucune.
7. **Apprendre** de domaines transverses : recherche, culture, droit, journalisme…
8. **Transmettre** nos expériences, notre savoir-faire.
9. **Partager** une journée de conférences unique.
10. **Insuffler** une prise de recul sur nos métiers.
11. **Donner** du sens à nos actions.
12. **Générer** de la confiance personnelle.
13. **Réfléchir** ensemble à des problématiques communes.
14. **Expérimenter** en continu pour apprendre de nos erreurs aussi bien que de nos succès.
15. **Confier** nos peurs, nos craintes et nos joies en toute humilité et sincérité.
16. **Offrir** une nourriture saine et locale.

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
