class User < ApplicationRecord
    has_secure_password
    has_many :documents, dependent: :destroy
    has_many :directories, dependent: :destroy
end
