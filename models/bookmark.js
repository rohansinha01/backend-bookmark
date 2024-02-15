const mongoose = require('./connection')

const BookmarkSchema = new mongoose.Schema({
    name: String,
    url: String,
    user: String,
})

const Bookmark = mongoose.model('Bookmark', BookmarkSchema)

module.exports = Bookmark;