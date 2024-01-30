FROM ruby:3.3.0

RUN apt-get update && apt-get install -y nodejs npm

RUN gem install bundler

WORKDIR /var/www

