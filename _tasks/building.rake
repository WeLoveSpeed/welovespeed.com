namespace :build do

  # Use: rake clean
  desc 'Clean Jekyll build'
  task :clean, [:env] do |_t, _args|
    cleanup
  end

  desc 'Preview on local machine (server with --auto)'
  task :dev => :clean do |_t, args|
    if rake_running
      puts "\n\nWarning! An instance of rake seems to be running (it might not be *this* Rakefile, however).\n"
      puts "Building while running other tasks (e.g., preview), might create a website with broken links.\n\n"
      puts 'Are you sure you want to continue? [Y|n]'

      ans = STDIN.gets.chomp
      exit if ans != 'Y'
    end
    jekyll("build --config _config.yml,_config_dev.yml")
  end

  desc 'Preview on local machine (server with --auto)'
  task :serve => :clean do |_t, args|
    if rake_running
      puts "\n\nWarning! An instance of rake seems to be running (it might not be *this* Rakefile, however).\n"
      puts "Building while running other tasks (e.g., preview), might create a website with broken links.\n\n"
      puts 'Are you sure you want to continue? [Y|n]'

      ans = STDIN.gets.chomp
      exit if ans != 'Y'
    end
    jekyll("serve --config _config.yml,_config_dev.yml")
  end

  desc 'Generate for deployment (but do not deploy)'
  task :prod => [:clean, 'prebuild:test'] do |_t, args|
    if rake_running
      puts "\n\nWarning! An instance of rake seems to be running (it might not be *this* Rakefile, however).\n"
      puts "Building while running other tasks (e.g., preview), might create a website with broken links.\n\n"
      puts 'Are you sure you want to continue? [Y|n]'

      ans = STDIN.gets.chomp
      exit if ans != 'Y'
    end
    puts 'Building with Jekyll…'
    jekyll("build --config _config.yml")
  end

  #
  # General support functions
  #

  # remove generated site
  def cleanup
    sh 'rm -rf _site'
  end

  # launch jekyll
  def jekyll(directives = '')
    sh 'jekyll ' + directives
  end

  # check if there is another rake task running (in addition to this one!)
  def rake_running
    `ps | grep 'rake' | grep -v 'grep' | wc -l`.to_i > 1
  end
end

task build: 'build:preview'
