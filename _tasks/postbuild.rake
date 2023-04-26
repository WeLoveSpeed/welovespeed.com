# frozen_string_literal: true

require 'bundler/setup'
require 'json'
require 'net/http'
require 'rubygems'
require 'time'
require 'yaml'

namespace :postbuild do

  task test: ['test:kiss']

  namespace :test do
    desc 'Test if generated website is valid (do not test external links)'
    task :kiss do
      sh 'htmlproofer ./_site --disable-external --ignore-urls "#,https://www.weezevent.com/?c=sys_widget,/en/legal-mentions/,/2023/cfp,/en/2023/cfp" --ignore-empty-alt true‹'
    end

    desc 'Test if generated website is valid (test external links)'
    task :external do
      sh 'htmlproofer ./_site --ignore-urls "#,https://www.weezevent.com/?c=sys_widget" --ignore-empty-alt true'
    end
  end
end
