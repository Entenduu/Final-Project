class DirectorySerializer < ActiveModel::Serializer
  attributes :id, :name, :directory_id, :user_id
  has_many :documents
end
