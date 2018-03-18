const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: String,
  technology: String,
  description: String,
  creator: String,
  datePosted: Date,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('projects', projectSchema);
