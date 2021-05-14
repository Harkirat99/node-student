let mongoose = require('mongoose');

let studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
    age: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Student', studentSchema);