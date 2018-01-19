module Jekyll
  class I18NFilter
    @@locale

    def get_locale
      if @@locale.nil?
        @@locale = Jekyll.configuration({})['locale'] || "fr_FR"
      end
      @@locale
    end

    def t(input, given_locale = nil)
      if given_locale.nil?
        given_locale = get_locale
      end
      if given_locale == get_locale
        @text
      else
        translations = site['data']['translations'][given_locale]
        raise 'Translations not provided' unless translations
        translation = translations[@text]
        raise "Translation not provided: #{@text}" unless translation
        translation
      end
    end
  end
end
