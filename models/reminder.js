const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reminderSchema = new Schema ({
    userID: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
    repeat: {
        type: Boolean,
        required: true
    }
}, {timestamps: true});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;