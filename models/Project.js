const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: String,
  description: String,
  creator: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  datePosted: Date
});

mongoose.model('projects', projectSchema);
