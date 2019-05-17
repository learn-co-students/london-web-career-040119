class PostsController < ApplicationController
  def create
    post = Post.new(user_id: params[:user_id], title: params[:title], content: params[:content], claps: 0)
    if post.save
      render json: post
    else
      render json: {error: "Unable to create post."}, status: 400
    end
  end
end
