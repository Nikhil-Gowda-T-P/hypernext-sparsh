const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const announcementsModel = mongoose.model('Announcements', announcementSchema)
module.exports = { announcementsModel }