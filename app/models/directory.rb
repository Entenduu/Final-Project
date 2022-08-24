class Directory < ApplicationRecord
    belongs_to :directory, optional: true
    belongs_to :user
    has_many :documents 
end
