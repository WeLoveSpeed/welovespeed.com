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
      sh 'htmlproofer ./_site --disable-external --url-ignore "#,https://www.weezevent.com/?c=sys_widget,/en/legal-mentions/,/2019/cfp,/en/2019/cfp" --empty-alt-ignore true'
    end

    desc 'Test if generated website is valid (test external links)'
    task :external do
      sh 'htmlproofer ./_site --url-ignore "#,https://www.weezevent.com/?c=sys_widget" --empty-alt-ignore true'
    end
  end
end
