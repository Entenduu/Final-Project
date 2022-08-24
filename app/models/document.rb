class Document < ApplicationRecord
  belongs_to :directory
  has_one_attached :attachment

  def attachment_url
    Rails.application.routes.url_helpers.url_for(attachment) if attachment.attached?
  end
end
