# https://www.scandio.de/blog/en/2017/11/jekyll-performance
module Jekyll
  class Translation < Generator
    safe true
    priority :high

    def generate(site)
      translations = {}

      site.pages.each do |page|
        name = page.data['i18n-key']
        locale = page.data['locale']
        next unless name
        if translations.key?(name)
          translations[name].each do |translation|
            if translation.data['locale'] != locale
              page.data['translation'] = translation
              translation.data['translation'] = page
            end
          end
        else
          translations[name] = []
        end
        translations[name].push(page)
      end

      site.posts.docs.each do |post|
        name = post.data['i18n-key']
        locale = post.data['locale']
        next unless name
        if translations.key?(name)
          translations[name].each do |translation|
            if translation.data['locale'] != locale
              post.data['translation'] = translation
              translation.data['translation'] = post
            end
          end
        else
          translations[name] = []
        end
        translations[name].push(post)
      end

      site.collections['talks'].docs.each do |talk|
        name = talk.data['i18n-key']
        locale = talk.data['locale']
        next unless name

        if translations.key?(name)
          translations[name].each do |translation|
            if translation.data['locale'] != locale
              talk.data['translation'] = translation
              translation.data['translation'] = talk
            end
          end
        else
          translations[name] = []
        end
        translations[name].push(talk)
      end
    end
  end
end
