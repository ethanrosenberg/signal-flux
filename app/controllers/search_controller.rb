require 'json'
require 'open-uri'
require 'net/http'
require 'nokogiri'

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


  def parse



   #render json: get_profile_images("https://twitter.com/CarrieWilkerson/")
   file = File.read('app/controllers/twitter_photos.json')
   render json: data_hash = JSON.parse(file)




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
