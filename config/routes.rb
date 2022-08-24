Rails.application.routes.draw do
  resources :documents
  resources :directories
  resources :users
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  # root "articles#index"
end
