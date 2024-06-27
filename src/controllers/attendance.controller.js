const StatusCode = require("../../commons/utils/statusCode");
const response = require("../../commons/response/response");

const attendanceServices=require("../services/student.attendance.services")
//getAttendance 

getAttendance= async(req,res)=>{
    try{
        const attendance=await attendanceServices.getAttendance(req.body)
        if (!attendance) {
            return response.handleErrorResponse(
                {
                    errorCode: StatusCode.NOT_FOUND,
                    message: "Profile not found"
                },
                res
            );
        }
        return response.handleSuccessResponse(
            attendance,
            res,
            "success",
            "success"
        )

    }catch(error){
        return response.handleErrorResponse(
            {errorCode:StatusCode.SERVER_ERROR,
                message:"Internal Server Error"},
                res,
                error

        )
    }
}

module.exports={
    getAttendance
}