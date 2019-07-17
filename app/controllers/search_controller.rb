class SearchController < ApplicationController

  def parse

    render json: {
      message: "Its Working!"
    }

  end
end
