class DocumentSerializer < ActiveModel::Serializer
  attributes :id, :name, :directory_id, :attachment_url
  belongs_to :directory
end
