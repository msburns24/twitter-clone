Rails.application.routes.draw do
  root "home#index"
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  }

  namespace :api do
    namespace :v1 do
      resources :tweets, only: [:index, :show, :create, :destroy]
      resources :users, only: [:index, :show, :create, :destroy]
    end
  end

  # Handle all others through React
  get '*path', to: 'home#index', via: :all
end
