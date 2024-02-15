# https://www.scandio.de/blog/en/2017/11/jekyll-performance
module Jekyll
  class Conference < Generator
    safe true
    priority :high

    def generate(site)
      talksByYear = site.collections['talks'].docs
        .group_by { |talk| talk.data['year'].to_s + talk.data['locale'] }
        .map { |year,talks|
          [
            year,
            talks.sort_by {
              |talk|
                talk == nil || !talk.data.key?('display-order') ? 0 : talk.data['display-order']
            }
          ]
        }.to_h

      previousTalk = Hash.new
      talksByYear.each do |year, talks|
        talks.each do |talk|
          locale = talk.data['locale']

          if previousTalk.key?(locale) && previousTalk[locale].data['year'] == talk['year']
            talk.data['previous_talk'] = previousTalk[locale]
            previousTalk[locale].data['next_talk'] = talk;
          end

          previousTalk[locale] = talk;
        end
      end
    end
  end
end
