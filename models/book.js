var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  author: String,
  image: String,
  releaseDate: String,
}); //This represent the blueprint/mold

//This represents the creation of the mold
var Book = mongoose.model('Book', BookSchema);

//
module.exports = Book;
