// models/attendance.js
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    rollNo:{ type: String, required: true } ,
    semester: { type: String, required: true },
    totalClasses: { type: Number, required: true },
    attendedClasses: { type: Number, required: true },
    attendancePercentage: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

const attendanceModel = mongoose.model('Attendance', attendanceSchema);

module.exports = {attendanceModel};
