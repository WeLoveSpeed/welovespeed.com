# We ❤️ Speed

Site internet de la conférence 'We ❤️ Speed', dont la première édition aura lieu le 9 octobre à Bordeaux

URL finale : https://www.welovespeed.com/.

## Installation classique

### Pré-requis

Le site est généré à l'aide de [Jekyll](https://jekyllrb.com/) et nécessite Ruby 3.3.0 (voir `.ruby-version`).

Nous vous recommandons de gérer l'installation de Ruby via [rbenv](https://github.com/rbenv/rbenv).

Sous Mac OS X, vous pouvez utiliser [Homebrew](https://brew.sh/) pour cela

```bash
$ brew install rbenv ruby-build
```

Sous GNU/Linux, certaines librairies sont nécessaires (à adapter à votre gestionnaire de paquets) :

```bash
sudo apt-get install -y libreadline-dev build-essential
```

Puis pour rbenv et ruby-build, préférer une installation par git :

```bash
$ git clone https://github.com/rbenv/rbenv.git ~/.rbenv
$ cd ~/.rbenv && src/configure && make -C src
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
$ git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```

### Installation

Si vous n'avez pas déjà cloné le dépot :

```bash
$ git clone https://github.com/WeLoveSpeed/welovespeed.com.git && cd welovespeed.com
```

Si bundler n'est pas installé

```bash
$ gem install bundler
```

Pour installer toutes les dépendances du projet :

```bash
$ bundle install;
```

Pour installer la bonne version de Ruby avec rbenv :

```bash
$ rbenv install
```

### Travailler en local

Pour travailler sur le site et surveiller les modifications :

```bash
$ bundle exec rake build:serve
```

Pour builder sur l'environnement d'intégration

```bash
$ bundle exec rake build:integ
```

Pour builder pour la Production

```bash
$ bundle exec rake build:prod
```

Si vous modifiez un des fichiers `_config_*.yml`, il faut couper et relancer.

Le site est maintenant accessible en local à l'adresse http://127.0.0.1:4000/ (dev).

Pour plus d'information sur l'utilisation de Jekyll, reportez-vous à la [documentation officielle](https://jekyllrb.com/docs/).

## Installation Docker

### Pré-requis

Vous devez avoir [Docker](https://www.docker.com/) >= 24 & [Docker Compose](https://docs.docker.com/compose/) >= 2.23 installé sur votre machine.

### Installation

```bash
$ docker-compose run bundle install
```

### Travailler en local

Pour travailler sur le site et surveiller les modifications :

```bash
$ docker-compose up -d bundle
```

Le site est maintenant accessible en local à l'adresse http://127.0.0.1:4000/ (dev).

Pour builder pour l'environnement d'intégration

```bash
$ docker-compose run bundle exec rake build:integ
```

Pour builder pour la Production

```bash
$ docker-compose run bundle exec rake build:prod
```

## Contribution

Pour toute demande, merci de [créer une issue](https://github.com/WeLoveSpeed/welovespeed.com/issues/new) sur GitHub.

Si vous souhaitez nous aider, vous pouvez [copier](https://github.com/WeLoveSpeed/welovespeed.com/fork) le dépôt, faire vos modifications dans une nouvelle branche et [faire une demande de fusion](https://github.com/WeLoveSpeed/welovespeed.com/pulls).

Toute modification doit faire l'objet d'une [pull request](https://github.com/WeLoveSpeed/welovespeed.com/pulls) et doit passer les tests avant de pouvoir être fusionnée.

### Comment sont organisés les contenus ?

Les pages sont dans le dossier [pages](pages), mais certains contenus ne sont pas là, pour des raisons d'organisation du code.

Par exemple, les en-têtes de page sont dans :

- [\_includes/header-home.html](_includes/header-home.html) pour la page d'accueil ;
- [\_includes/header-page.html](_includes/header-page.html) pour les autres pages.

D'autres morceaux de contenus se trouvent dans [\_includes](_includes), car ils servent à plusieurs endroits dans le site, comme le bloc d'affichage des intervenants situés dans [\_includes/speakers.html](_includes/speakers.html).

Les définitions des talks sont dans [\_talks](_talks).

#### Données et navigation

Certaines données-clées sont réunies dans [\_data](_data) : les informations sur les [sponsors](_data/sponsors.yml), le [staff](_data/staff.yml), les [speakers](_data/speakers.yml)…

C'est aussi là qu'on trouve le fichier qui définit [quels éléments apparaissent dans la navigation ou le pied de page](_data/sitemap.yml).

### Et la traduction ?

Le contenu principal des pages est traduit directement en séparant les fichiers. Mais pour éviter de dupliquer du code, certains portions de codes utilisent des mécanismes intégrés de traduction de chaines de caractères.

Si vous voyez :

```
{% t Lorem ipsum sit dolor amet %}
```

ou :

```
{{ "Lorem ipsum sit dolor amet" | t: page.locale }}
```

C'est que la chaine `"Lorem ipsum sit dolor amet"` est traduite dans [\_data/translations.yml](_data/translations.yml). À chaque chaine française (fr_FR) est associée un équivalent anglais (en_US). On pourrait imaginer d'autres langues mais ce n'est pas prévu pour l'instant.

**Et pour le visiteur ?**

Lors de sa première visite, il est automatiquement transférée vers la langue de préférence de son navigateur : français s'il s'agit du français ; anglais sinon.

## Tests

Avant de soumettre votre pull-request, vérifiez que les tests passent après le build de la production :

```bash
$ bundle exec rake postbuild:test:kiss
```

## Commandes utiles

- Pour transformer des logos SVG en PNG

```sh
npm install
npm run generate:logo_newsletter
```

## Licence

Ce code est publié sous licence MIT.
