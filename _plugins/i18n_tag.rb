module Jekyll
  class I18NTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end

    def render(context)
      locale = context['page']['locale']
      locale ||= context['site']['locale']
      raise "Page language not specified: #{context['page']['path']}" unless locale
      site = context['site']
      source_locale = site['locale']
      if locale == source_locale
        @text
      else
        translations = site['data']['translations'][locale]
        raise 'Translations not provided' unless translations
        translation = translations[@text]
        raise "Translation not provided: #{@text}" unless translation
        translation
      end
    end
  end
  end

Liquid::Template.register_tag('t', Jekyll::I18NTag)