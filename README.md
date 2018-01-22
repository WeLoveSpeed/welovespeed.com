# Sud Web 2018

[![Build Status](https://travis-ci.org/sudweb/2018.svg?branch=master)](https://travis-ci.org/sudweb/2018)
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/sud-web/sud-web)

Site internet du cycle de conférences annuel Sud Web, dont la 7e édition aura lieu à Anduze les 25 et 26 mai 2018.

[https://sudweb.fr/](https://sudweb.fr/)

## Pré-requis
Le site est généré à l'aide de [Jekyll](http://jekyllrb.com/) et nécessite Ruby 2.3 (voir `.ruby-version`)

Nous vous recommandons de gérer l'installation de Ruby via [rbenv](http://rbenv.org/).

Sous Mac OS X, vous pouvez utiliser [Homebrew](http://brew.sh/) pour cela
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

## Installation

Si vous n'avez pas déjà cloné le dépot :
```bash
$ git clone https://github.com/sudweb/2018.git && cd 2018
```
Si bundler n'est pas installé
```bash
$ gem install bundler
```
Pour installer toutes les dépendances du projet :
```bash
$ bundle install
```
Pour installer la bonne version de Ruby
```bash
$ rbenv install
```

## Travailler en local

Pour travailler sur le site et surveiller les modifications :
```bash
$ bundle exec foreman start
```
ou
```bash
$ bundle exec jekyll serve --config _config.yml,_config_dev.yml
```

Si vous modifiez le fichier `_config.yml`, il faut couper et relancer Jekyll.

Le site est maintenant accessible en local à l'adresse http://127.0.0.1:4000/2018/

Pour plus d'information sur l'utilisation de Jekyll, reportez-vous à la [documentation officielle](http://jekyllrb.com/docs/home/).

## Styleguide et notes d'intégration

* [Notes d'intégration](notes-integration.md) de @Twikito

## Contribution

Pour toute demande, merci de [créer une issue](https://github.com/sudweb/2018/issues/new) sur GitHub.

Si vous souhaitez nous aider, vous pouvez [copier](https://help.github.com/articles/fork-a-repo/) le dépôt, faire vos modifications dans une nouvelle branche et [faire une demande de fusion](https://github.com/sudweb/2018/pulls).

Toute modification doit faire l'objet d'une [pull request](https://github.com/sudweb/2018/pulls) et doit passer les tests avant de pouvoir être fusionnée.

## Tests

Avant de soumettre votre pull-request, vérifiez que les tests passent :

```bash
$ script/cibuild
Running ["ScriptCheck", "LinkCheck", "ImageCheck"] on ./_site on *.html...

HTML-Proofer finished successfully.
```

## Licence

Ce code est publié sous licence MIT.
