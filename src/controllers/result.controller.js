const mongoose = require("mongoose");
const StatusCode = require("../../commons/utils/statusCode");
const response = require("../../commons/response/response");
const resultServices=require("../services/student.result.services")

//view student result
viewResult= async(req,res) =>{
    try{
        
        const semResult=await resultServices.getResult(req.body);
        console.log("result in controller is")
        console.log(semResult)
        if (!semResult) {
            return response.handleErrorResponse(
                {
                    errorCode: StatusCode.NOT_FOUND,
                    message: "Profile not found"
                },
                res
            );
        }
        return response.handleSuccessResponse(
            semResult,
            res,
            "success",
            "success"

        );


    }catch(error){
        return response.handleErrorResponse(
            {errorCode:StatusCode.SERVER_ERROR,
                message:"Internal Server Error"},
                res,
                error
            
        );

    }

}

module.exports={
    viewResult
}