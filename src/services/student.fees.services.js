const profileQuery = require("../queries/student.query");
const StatusCode = require("../../commons/utils/statusCode");
const feesQuery= require("../queries/fees.query")


getFees = async(body)=>{
    try{
        const {rollNo,semester}=body;
        console.log("in services",rollNo,semester)
        const fees = await feesQuery.getFees(rollNo,semester);
        return fees;
    }
    catch(error){
        throw error
    }
}



//getPending fees

getPendingFees = async(body)=>{
    try{
        const {rollNo,semester}=body;
        console.log("in services",rollNo,semester)
        const fees = await feesQuery.getPendingFees(rollNo,semester);
        return fees;
    }
    catch(error){
        throw error
    }
}







module.exports={getFees,
    getPendingFees
}