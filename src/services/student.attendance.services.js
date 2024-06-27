const StatusCode = require("../../commons/utils/statusCode")
const attendanceQuery=require("../queries/attendance.query")

getAttendance=async(body)=>{
    try{
        const {rollNo,sem}=body;
        const attendance=await attendanceQuery.getAttendance(rollNo,sem);
        if(attendance){
            return attendance
        }else{
            return 'no data found with these details'
        }
    }catch(err){
            throw err
        }

        

}




module.exports={getAttendance}


