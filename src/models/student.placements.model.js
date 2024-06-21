const mongoose = require('mongoose');

const placementSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    rollNo: { type: String, required: true, unique: true },
    course: { type: String, required: true },
    year: { type: Number, required: true },
    company: { type: String, required: true },
    package: { type: Number, required: true }
});


const placementsModel = mongoose.model('placement', placementSchema)
module.exports = { placementsModel}


