const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        
    }
})
const studentProfileModel = mongoose.model('profile', profileSchema)
module.exports = { studentProfileModel }