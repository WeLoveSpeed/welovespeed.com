# frozen_string_literal: true

require 'bundler/setup'
require 'json'
require 'net/http'
require 'rubygems'
require 'time'
require 'yaml'
require "html-proofer"


namespace :postbuild do

  task test: ['test:kiss']

  namespace :test do
    desc 'Test if generated website is valid (do not test external links)'
    task :kiss do
      config = {
        disable_external: true,
        log_level: 'info',
        allow_hash_href: true,
        ignore_empty_alt: true,
        enforce_https: false,
        ignore_urls: [
          "https://www.weezevent.com/?c=sys_widget",
          "/en/legal-mentions/",
          "/2024/cfp",
          "/en/2024/cfp"
        ],
        ignore_files: [
          "./_site/admin/talks/index.html"
        ]
      }
      HTMLProofer.check_directory("./_site", config).run
    end

    desc 'Test if generated website is valid (test external links)'
    task :external do
      config = {
        disable_external: false,
        log_level: 'info',
        allow_hash_href: true,
        ignore_empty_alt: true,
        enforce_https: false,
        ignore_urls: [
          "https://www.weezevent.com/?c=sys_widget",
          "/en/legal-mentions/",
          "/2024/cfp",
          "/en/2024/cfp",
          "/admin/talks/"
        ],
        ignore_files: [
          "./_site/admin/talks/index.html"
        ]
      }
      HTMLProofer.check_directory("./_site", config).run
    end
  end
end
