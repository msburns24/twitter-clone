class Api::V1::TweetsController < ApplicationController
  def index
    @tweets = Tweet.all
    render json: @tweets
  end

  def show
    @tweet = Tweet.find(params[:id])
    render json: @tweet
  end

  def create
    puts "======================================================================"
    puts params
    puts "======================================================================"

    # @tweet = Tweet.new(tweet_params)
    # if @tweet.save
    #   render json: @tweet
    # else
    #   render json: {error: 'Error creating tweet'}
    # end
  end

  def destroy
    @tweet = Tweet.find(params[:id])
    @tweet.destroy
    render json: {message: 'Tweet deleted'}
  end

  private 

    def tweet_params
      params.require(:tweet).permit(:content, :user_id)
    end
end
