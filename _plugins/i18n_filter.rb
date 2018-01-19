module Jekyll
  module I18NFilter
    @@locale = nil
    @@translations = []

    def get_locale
      if @@locale.nil?
        @@locale = Jekyll.configuration({})['locale'] || "fr_FR"
      end
      @@locale
    end

    def get_translations
      if @@translations.empty?
        @@translations = Jekyll.sites[0].data['translations']
      end
      @@translations
    end

    def t(input, given_locale = nil)
      if given_locale.nil?
        given_locale = get_locale
      end
      if given_locale == get_locale
        input
      else
        translations = get_translations[given_locale]
        raise 'Translations not provided' unless translations
        translation = translations[input]
        raise "Translation not provided: #{input}" unless translation
        translation
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::I18NFilter)
