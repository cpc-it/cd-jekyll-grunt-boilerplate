# Convert seconds to time
#
#
# Example: {{ 82800 | seconds_time }}  => 11:00PM
# Ref: http://stackoverflow.com/questions/3963930/ruby-rails-how-to-convert-seconds-to-time
# Ref2: http://apidock.com/ruby/DateTime/strftime

module Jekyll
  module SecondsTimeFilter
    def seconds_time(seconds, format)
      Time.at(seconds).utc.strftime(format)
    end
  end
end

Liquid::Template.register_filter(Jekyll::SecondsTimeFilter)



# Convert time to seconds
#
# Input: Any time format, 'Time' should recognize it.
# Example: {{ input | time_seconds }}
# Ref: http://stackoverflow.com/questions/3824369/ruby-convert-time-to-seconds

module Jekyll
  module TimeSecondsFilter
    def time_seconds(time)
      t = Time.parse(time)
      s = t.hour * 3600 + t.min * 60 + t.sec
    end
  end
end

Liquid::Template.register_filter(Jekyll::TimeSecondsFilter)



# Calculate time difference
#
# Input: Any time format, 'Time' should recognize it.
# Example: {{ time_a | time_diff:time_b }}

module Jekyll
  module TimeDiffFilter
    def time_diff(a, b)

      a_time = Time.parse(a)
      b_time = Time.parse(b)

      diff = a_time - b_time
      Time.at(diff).utc.strftime("%I:%M")
    end
  end
end

Liquid::Template.register_filter(Jekyll::TimeDiffFilter)



# CalPoly custom formatting filters
#
# convert_calpoly_timerange: Converts a timerange into the specified time_format
# to convert a series of timeranges, first split them and then call this function one by one
# 
# Sample input/output:
#   Ex1: {{ "04:00-11:00" | convert_calpoly_timerange }} = 4:00 AM - 11:00 AM
#   Ex2: {{ "04:00*11:00" | convert_calpoly_timerange: "*" }} = 4:00 AM - 11:00 AM 
#   Ex3: {{ "04:00,11:00" | convert_calpoly_timerange: ",", "%H:%M" }} = 04:00 - 11:00
#
# Edge cases:
#   Ex4: {{ "" | convert_calpoly_timerange }} = Closed
#   Ex5: {{ "00:00-24:00" | convert_calpoly_timerange }} = Open 24 hours

module Jekyll
  module CalPolyFormatting
    def convert_calpoly_timerange(timeRange, splitSymbol = "-", time_format = "%l:%M %p" )

      if timeRange == ""
        "Closed"
      elsif timeRange == "00:00-24:00"
        "Open 24 hours"
      else

        time_range = "#{timeRange}"
        split_symbol = "#{splitSymbol}"
        left_side, right_side, *rest = time_range.split(split_symbol)

        unless left_side.nil? || left_side.length == 0 || right_side.nil? || right_side.length == 0

          left_seconds = time_seconds(left_side)
          left_finalFormat = seconds_time(left_seconds,time_format)

          right_seconds = time_seconds(right_side)
          right_finalFormat = seconds_time(right_seconds,time_format)

          "#{left_finalFormat} - #{right_finalFormat}"
        end

      end

    end
  end
end

Liquid::Template.register_filter(Jekyll::CalPolyFormatting)