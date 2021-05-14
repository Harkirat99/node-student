let mongoose = require('mongoose');

let classSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Class', classSchema);