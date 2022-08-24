class CreateDirectories < ActiveRecord::Migration[7.0]
  def change
    create_table :directories do |t|
      t.string :name
      t.integer :directory_id
      t.references :user

      t.timestamps
    end
  end
end
