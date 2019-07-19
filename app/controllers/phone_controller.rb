require 'json'
require 'open-uri'
require 'net/http'
require 'nokogiri'
require 'uri'

class PhoneController < ApplicationController

  def search

    results = [

      {
          provider: "whocalld",
          :type=>"Land or VoIP",
          :location=>"Pennsylvania US"

      },
      {
          provider: "whitepages",
          :type=>"Cell Phone",
          :location=>"New York US"

      }]


      sleep 2.5

    render json: results

  end

  def search_whocalld(number)
    page = Nokogiri::HTML(open("https://whocalld.com/+#{number}"))
    #page = Nokogiri::HTML(open("https://whocalld.com/+12153765689"))
    landOrVoip = page.css('div.module.callerid img')[0]['alt']
    location = page.css('div.module.callerid h3')[0].text

    results = {type: landOrVoip, location: location}

    return results
  end

end
