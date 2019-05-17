class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find_by(id: params[:id])
    if user != nil
      render json: user, include: :posts, except: [:created_at, :updated_at]
    else
      render json: { error: "User not found." }, status: 404
    end
  end
end
