const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/Student_DB').then(()=>{
  console.log('connected to mongodb');
})
.catch((err)=>{
  console.log(err)
})

