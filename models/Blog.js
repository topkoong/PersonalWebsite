const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  body: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  datePosted: Date
});

mongoose.model('blogPosts', blogSchema);
