
const {feesModel}=require("../models/student.fees.model")

//getfees
getFees=async(rollNo,sem)=>{
    try{
        console.log("in queries")
        console.log(rollNo,sem)
        const fees=await feesModel.findOne({rollNo:rollNo,semester:sem})
        console.log("in queries")
        console.log(fees)
        return fees
        }catch(err){
            console.log(err)
            throw err
        }
}


getPendingFees=async(rollNo,sem)=>{
    try{
        console.log("in queries")
        console.log(rollNo,sem)
        const fees=await feesModel.findOne({rollNo:rollNo,semester:sem},'amountDue')
        console.log("in queries")
        console.log(fees)
        return fees
        }catch(err){
            console.log(err)
            throw err
        }
}

module.exports={getFees,
    getPendingFees
}