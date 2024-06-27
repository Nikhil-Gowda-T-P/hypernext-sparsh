const {attendanceModel}=require("../models/student.attendance.model")



//getAttendance


getAttendance=async(rollNo,sem)=>{
    try{
        const attendance= await attendanceModel.findOne({rollNo:rollNo,semester:sem})
        return attendance

    }catch(error){
        throw error
    }
}
module.exports={getAttendance}