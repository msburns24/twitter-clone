Rails.application.routes.draw do
  devise_for :users
  root "home#index"
  # get '*path', to: 'home#index', via: :all

  namespace :api do
    namespace :v1 do
      resources :tweets, only: [:index, :show, :create, :destroy]
    end
  end
end
