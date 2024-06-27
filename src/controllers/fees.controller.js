const StatusCode = require("../../commons/utils/statusCode");
const response = require("../../commons/response/response");
const feeServies=require("../services/student.fees.services");


//viewFees
viewFees=async(req,res)=>{

    try{
        console.log(req.body)
        let fees=await feeServies.getFees(req.body);
        if(fees){
            return response.handleSuccessResponse(
                fees,
                res,
                "success",
                "success"
            )
        }
        else{
            return response.handleErrorResponse(
                {errorCode:StatusCode.NOT_FOUND,
                    message:"details not found for this record"},
                    res,
                    
                    
                
            );

        }
}catch(error){
    return response.handleErrorResponse(
        {errorCode:StatusCode.INTERNAL_SERVER_ERROR,
            message:"Internal server error"},
            res,
            error
    );


}
}


//pendingFees
pendingFees=async(req,res)=>{
    try{
        let fees=await feeServies.getPendingFees(req.body);
        if(fees){
            return response.handleSuccessResponse(
                fees,
                res,
                "success",
                "success"
                )
        }
        else{
                
            return response.handleErrorResponse(
                {errorCode:StatusCode.NOT_FOUND,
                        message:"details not found for this record"},
                        res,
                    );
                }
    }
    catch(error){
                
        return response.handleErrorResponse(
            {errorCode:StatusCode.INTERNAL_SERVER_ERROR,
                message:"Internal server error"},
                res,
                error
        );
                
      }
}



module.exports={
    viewFees,
    pendingFees
}