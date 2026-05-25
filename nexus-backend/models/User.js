// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Enterprise mail verification token field is required.'],
    unique: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please supply a verified semantic format layout.']
  },
  password: {
    type: String,
    required: [true, 'Account protection passphrase signature is mandatory.'],
    minlength: [6, 'Security string thickness bound breached. Minimum 6 characters required.']
  },
  role: {
    type: String,
    default: 'Student'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);