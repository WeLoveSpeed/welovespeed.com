# frozen_string_literal: true

load '_tasks/prebuild.rake'
load '_tasks/building.rake'
load '_tasks/postbuild.rake'

task default: ['build:serve']
task dryrun: ['build:prod', 'test']
task test: ['postbuild:test']
