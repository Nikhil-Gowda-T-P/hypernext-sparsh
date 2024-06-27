
const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name:{ 
          type: String,
          required: true 
          },
    grade:{ 
        type: String, 
        required: true
          } 
});

const resultSchema = new mongoose.Schema({
    name:{type:String,required:true},
    rollNo:{type:String,required:true},
    semester: { type: String, required: true },
    subjects: [subjectSchema],
    date: { type: Date, default: Date.now }
});


const ResultModel = mongoose.model('Result', resultSchema)
module.exports = { ResultModel }