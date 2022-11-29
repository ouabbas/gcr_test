const { Schema, model } = require('mongoose');

const schema = new Schema({
  answer: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('TwitosAnswer', schema, 'twitosanswers');
