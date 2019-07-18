require 'json'
require 'open-uri'
require 'net/http'
require 'nokogiri'
require 'uri'

require 'exifr/jpeg'
require 'geo/coord'


class SearchController < ApplicationController


  def get_profile_images(profileUrl)
    page = MetaInspector.new(profileUrl)
    #page = MetaInspector.new("https://twitter.com/CarrieWilkerson")
    images = []
    page.images.each do |image|
      puts image
      if image.include? "https://pbs.twimg.com/media/"
        images << { image_url: image }
      end
    end
    return images
  end

  def get_image_gps(imageUrl)
    testUrl = imageUrl
    #testUrl = "https://github.com/ianare/exif-samples/blob/master/jpg/gps/DSCN0025.jpg"
    testUrl = testUrl.gsub(':', '%3A')
    testUrl = testUrl.gsub('/', '%2F')


  callUrl = "https://www.pida.io/data/#{testUrl}?format=json"
  testdata = Net::HTTP.get_response(URI(callUrl)).body
  testJSON = JSON.parse(testdata)

  testJSON.each do |child|
    #puts child
  end

  position = testJSON["GPSPosition"]

  if position
  position = position.gsub('deg ', '')
  g = Geo::Coord.parse_dms(position)
  gpsDATA = {
    "GPSDateTime": testJSON["GPSDateTime"],
    "GPSLatitude": testJSON["GPSLatitude"],
    "GPSLongitude": testJSON["GPSLongitude"],
    "GPSPosition": g.to_s(dms: false)  # => "50.004444,36.231389"
    }
  return gpsDATA
  else
    return {
      "GPSPosition": "Unknown."
    }

  end

  end

  def get_twitter_photos_gps(profileUrl)
    data = []
    images = get_profile_images(profileUrl)
    images.unshift({ "image_url": "https://raw.githubusercontent.com/ianare/exif-samples/master/jpg/gps/DSCN0025.jpg"})


    images.each do |photo|

      photoItem = {}
      photoItem["imageUrl"] = photo[:image_url]
      if photo[:image_url].end_with?(".jpg")

        gps = get_image_gps(photo[:image_url])
        photoItem["gps"] = gps

        sleep 2.2
      else
        photoItem["gps"] = {
          "GPSPosition": "Unknown."
        }
      end
      byebug
      data << photoItem
    end

    render json: data

  end

  def parse



file = File.read('app/controllers/photos_gps.json')
#item2 = JSON.parse(file)[1]
#position = item2["gps"]["GPSPosition"]
#position = position.gsub('deg ', '')
#byebug
#g# = Geo::Coord.parse_dms(position)

 #g = Geo::Coord.parse('50° 0′ 16″ N, 36° 13′ 53″ E')

   #working
   #render json: get_twitter_photos_gps("https://twitter.com/CarrieWilkerson")
   #file = File.read('app/controllers/photos_gps.json')
   sleep 5.2
   render json: data_hash = JSON.parse(file)



   #render json: data_hash = JSON.parse(file)




   #imageLink = Net::HTTP.get_response(URI('https://pic.twitter.com/0Q7T8nN30S'))
   #actualImageLink = imageLink['location']


    #source = 'https://twitter.com/i/profiles/show/CarrieWilkerson/timeline/tweets?include_available_features=1&include_entities=1&include_new_items_bar=true'
   #resp = Net::HTTP.get_response(URI.parse(source))
   #data = resp.body
   #result = JSON.parse(data)["items_html"]

    #document = Nokogiri::HTML(result)
#byebug



    #document.css('p').each do |link|
    #  puts link.text + " End"
    #end


   #TweetTextSize TweetTextSize--normal js-tweet-text tweet-text

#byebug
  # @urls = []
    # count = 0
     #result["items"].each do |item|

    #   @urls << item["link"]
      # count = count + 1


    # end



  end
end
