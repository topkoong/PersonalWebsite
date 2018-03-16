const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: String,
  technology: String,
  description: String,
  creator: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  datePosted: { type: Date, default: Date.now }
});

mongoose.model('projects', projectSchema);
