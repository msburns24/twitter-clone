Rails.application.routes.draw do
  devise_for :users
  root "home#index"

  namespace :api do
    namespace :v1 do
      resources :tweets, only: [:index, :show, :create, :destroy]
    end
  end

  # Handle all others through React
  get '*path', to: 'home#index', via: :all
end
