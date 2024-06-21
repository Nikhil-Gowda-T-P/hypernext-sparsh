const mongoose = require("mongoose");
const StatusCode = require("../../commons/utils/statusCode");
const response = require("../../commons/response/response");
const profileService = require("../services/student.profile.services");




const addStudent = async(req,res) => {
    try{
        console.log(req.body);
        const result = await profileService.addStudent(req.body);
        return response.handleSuccessResponse(
            result,
            res,
            "Successfully",
            "Successfully",
          );
        
        }catch(err){
             // Check for specific error types 
            if (err.name === 'ValidationError' || err.code === 11000) {
                return response.handleErrorResponse(
                    { errorCode: StatusCode.BAD_REQUEST, message: "Validation Error or Duplicate Entry" },
                    res
                );
            }
            
            return response.handleErrorResponse(
            { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
            res
            );
    }
}



//view profile
const viewProfile = async(req,res) =>{
    try{
        const result = await profileService.viewProfile(req.params.id);
        console.log(req.params.id)
        return response.handleSuccessResponse(
            result,
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


//edit studentDetails
const editStudentDetails = async(req,res) =>{
 try{
    console.log("in controller")
    const result = await profileService.editStudentDetails(req.params.id,req.body);
    return response.handleSuccessResponse(
        result,
        res,
        "success",
        "success")
 }
 catch(error){
    return response.handleErrorResponse(
        {errorCode:StatusCode.SERVER_ERROR,
            message:"Internal Server Error"},
            res,
            error
            );
            }
            
 }

 //delete student
 const deleteStudent =async(req,res) =>{
    try{
        const result = await profileService.deleteStudent(req.params.id);
        return response.handleSuccessResponse(
            result,
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
            );
            }
        
    }
 

















//view announcements

const announcements= async(req,res) =>{
    try{
        console.log("in controller")
        const result = await profileService.announcements();
        return response.handleSuccessResponse(
            result,
            res,
            "success",
            "success"
        );

    }
    catch(error){
        return response.handleErrorResponse(
            { errorCode:StatusCode.SERVER_ERROR,
                message:"Internal Server Error"},
                res,
                error
            );

    }
}
//placements
const placements= async(req,res) =>{
    try{
        console.log("in controller")
        const result = await profileService.placements();
        return response.handleSuccessResponse(
            result,
            res,
            "success",
            "success"
        );

    }
    catch(error){
        return response.handleErrorResponse(
            {errorCode:StatusCode.SERVER_ERROR,
                message:"Internal Server Error"},
                res,
                error
            );

    }
}


module.exports ={
    viewProfile,
    addStudent,
    editStudentDetails,
    deleteStudent,
    announcements,
    placements
}