const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  username: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('User', schema, 'users');
