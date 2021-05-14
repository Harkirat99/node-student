let mongoose = require('mongoose');

let teacherSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }
})
module.exports = mongoose.model('Teacher', teacherSchema);