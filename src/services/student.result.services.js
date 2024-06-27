const StatusCode = require("../../commons/utils/statusCode");
const resultQuery=require("../queries/result.query")

//getResult

getResult= async(body)=>{
    try{
        const {rollNo,sem}=body
        console.log(rollNo,sem)
        const result=await resultQuery.getResult(rollNo,sem)
        if(result){
            console.log("in services result is..")
            console.log(result)
            return result
        }
        else{
                return 'no result found with this rollNo and sem'
        }

    }catch(error){
    throw error;
}
}


module.exports={
    getResult
}
