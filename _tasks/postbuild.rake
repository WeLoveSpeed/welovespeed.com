# frozen_string_literal: true

require 'bundler/setup'
require 'json'
require 'net/http'
require 'rubygems'
require 'time'
require 'yaml'

namespace :postbuild do

  desc 'Deploy to remote server'
  task :deploy do |_t, args|
    sh "rsync -r --delete-after --quiet --exclude '.ssh' $TRAVIS_BUILD_DIR/_site/2018/ sudweb_2018@ssh-sudweb.alwaysdata.net:/home/sudweb/www/2018/"
  end

  task test: ['test:kiss']

  namespace :test do
    desc 'Test if generated website is valid (do not test external links)'
    task :kiss do
      sh 'htmlproofer ./_site --disable-external --url-ignore "#,https://www.weezevent.com/?c=sys_widget" --empty-alt-ignore true'
    end
  end
end
