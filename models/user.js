let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }

})
module.exports = mongoose.model('User', userSchema);
