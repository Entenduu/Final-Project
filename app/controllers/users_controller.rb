class UsersController < ApplicationController
    

    def index
        user = User.all
        render json: user
    end
        
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end
    
    private
    

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def user_params
        params.permit(:first_name, :last_name, :email, :password)
    end
end
