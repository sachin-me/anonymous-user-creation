const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  isAnonymous: { type: Boolean, default: false },
  username: { type: String, unique: true }
}, {
  timestamps: { type: Date, default: Date.now},
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
