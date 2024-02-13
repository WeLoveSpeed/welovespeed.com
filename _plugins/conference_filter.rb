require 'digest/md5'

module Jekyll
  module ConferenceFilter
    @@siteSpeakers = nil

    def to_site_data(site, locale)
      {
        current_edition: site.data['editions'].key?(site['current_edition']) ? {
          year: site['current_edition'],
          date: site.data['editions'][site['current_edition']]['date'][locale],
          location: site.data['editions'][site['current_edition']]['location'][locale],
        } : nil,
        tickets: site['tickets'],
        infos: site['infos'],
        schedule: to_schedule_data(site),
      }
    end

    def to_schedule_data(site)
      data = Hash.new

      if (!site.data['schedule'].key?(site['current_edition']))
        return data
      end

      for entry in site.data['schedule'][site['current_edition']]
        entry['values'].each_with_index do | value, index |
          if (!value.kind_of?(Hash) && !value.kind_of?(Array))
            room = site.data['schedule'][site['current_edition']][0]['values'][index]['fr_FR']
            data["/talks/" + site['current_edition'].to_s + "/" + value] = {
              'hour': entry['hour'],
              'index': index,
              'room': room,
            }
          end
        end
      end

      return data
    end

    def to_conferences_data(conferences, locale)
      data = Hash.new

      for conference in conferences
        data[conference.id] = to_conference_data(conference)
      end

      return data
    end


    def to_conference_data(conference, locale)
      if (conference && conference['video'] && conference['video']['url'])
        video = conference['video']['url']
      elsif (conference && conference['translation'] && conference['translation']['video'] && conference['translation']['video']['url'])
        video = conference['translation']['video']['url']
      else
        video = nil
      end

      return {
        'id': conference['id'],
        'title': microtypo(conference['title'], locale),
        'subtitle': microtypo(conference['subtitle'], locale),
        'year': conference['year'],
        'workshop': conference.key?('cta'),
        'speakers': to_speakers_data(conference['speakers'], conference['year'], locale),
        'video': video,
      }
    end

    def to_speakers_data(speakers, year, locale)
      if (speakers == nil)
        return nil
      end

      site = @context.registers[:site]
      siteSpeakers = site.data['speakers']

      data = Array.new

      for speakerId in speakers
        speaker = siteSpeakers[year][speakerId]
        data.push({
          'name': speaker['name'],
          'bio_short': speaker[locale]['bio_short'],
          'company': speaker['company'],
          'image': speaker['image']
        })
      end

      return data
    end

    def _microtypo(input, locale)
      template = "{{ \"" + input + "\" | microtypo: '"+locale+"' }}"

      return Liquid::Template.parse(template).render(@context)
    end
  end
end

Liquid::Template.register_filter(Jekyll::ConferenceFilter)
