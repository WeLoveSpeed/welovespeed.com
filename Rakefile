# frozen_string_literal: true

load '_tasks/prebuild.rake'
load '_tasks/building.rake'
load '_tasks/postbuild.rake'

task default: ['build:preview']
task dryrun: ['build:generate', 'postbuild:test']
task test: ['postbuild:test']
