const express = require("express");
const helmet = require("helmet");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const studentRouter=require("./routers/student.router");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(helmet());
app.use(cors()); 
app.use('/api/student',studentRouter);



require("dotenv").config({ path: "./config/dev.env" });
require("./db/mongoose");

const PORT = process.env.PORT || 3000;

app.get("/",(req, res)=>{
    res.send("Hi, This  is the user panel of sparsh App...")
   })
   const server = app.listen(PORT, () =>
     console.log(`server running on port ${PORT}`)
   );

app.use('/student',studentRouter)
   

