# frozen_string_literal: true

require 'rubygems'
require 'bundler/setup'
require 'json'
require 'yaml'

namespace :prebuild do
  task npm: ['npm:install', 'npm:build']
  task test: ['test:doctor', 'test:pages']

  namespace :test do
    desc 'Executes the jekyll doctor'
    task :doctor do |_t, args|
      jekyll("doctor --config _config.yml")
    end

    desc 'Test if the pages Front-Matter is YAML-valid'
    task :pages do
      @pages = []
      Dir.glob('pages/**/*.{md,markdown,html}').each do |p|
        @pages << p
      end
      @pages.each do |page|
        begin
          YAML.load_file(page)
        rescue Exception => e
          puts page
          puts e.message
          raise 'Page syntax is not valid'
        end
      end
      puts "#{@pages.size} valid pages"
    end
  end

  desc 'Install node dependencies'
  task :install do
    npm('install')
  end


  # launch jekyll
  def jekyll(directives = '')
    sh 'jekyll ' + directives
  end

  # launch npm
  def npm(directives = '')
    sh 'npm ' + directives
  end
end
