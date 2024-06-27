// models/review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    subjectName: { type: String, required: true },
    teacherName: { type: String, required: true },
    studentName: { type: String, required: true },
    studentRollNo: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const ReviewModel = mongoose.model('Review', reviewSchema);

module.exports = {ReviewModel};
