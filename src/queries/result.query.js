const { successMessage } = require("../../commons/constant/constant")
const {ResultModel}=require("../models/student.result.model")

//getResult based on rollNo and sem

getResult=async(rollNo,sem)=>{
    try{
        console.log(rollNo,sem)
        const result=await ResultModel.findOne({rollNo:rollNo,semester:sem})
        console.log(result)
        return result
    }
    catch(error){
        throw error
    }
}

module.exports={
    getResult
}

