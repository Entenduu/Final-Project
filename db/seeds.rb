# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.firs

u1 = User.create(first_name: 'cristian', last_name: 'morales', email:'entenduu@gmail.com', password: 'password')
d1 = Directory.create(name:'directory1', user: u1, directory_id: 0)
f1 = Document.create(name:'whatver', directory: d1)
    f1.attachment.attach(io: File.open('./db/seeds/test.png'), filename: "test.png", content_type: 'image/png')




