const mongoose = require("mongoose");
const StatusCode = require("../../commons/utils/statusCode");
const response = require("../../commons/response/response");
const profileService = require("../services/student.profile.services");




const addStudent = async (req, res) => {
    try {
        console.log(req.body);
        const result = await profileService.addStudent(req.body);
        return response.handleSuccessResponse(
            result,
            res,
            "Successfully",
            "Successfully"
        );
    } catch (err) {
       
        if (err.name === 'ValidationError') {
            const errors = Object.values(err.errors).map(e => e.message).join(', ');
                            //Object.values(errors).map(error => error.message).join(', ');
            return response.handleErrorResponse(
                { errorCode: StatusCode.BAD_REQUEST, message: `Validation Error: ${errors}` },
                res
            );
        } else if (err.code === 11000) {
            // Handling duplicate key error (e.g., duplicate email)
            return response.handleErrorResponse(
                { errorCode: StatusCode.BAD_REQUEST, message: "Duplicate Entry" },
                res
            );
        }

        // For other errors, return a generic server error
        return response.handleErrorResponse(
            { errorCode: StatusCode.SERVER_ERROR, message: "Internal Server Error" },
            res
        );
    }
};



//view profile
const viewProfile = async(req,res) =>{
    try{
        const result = await profileService.viewProfile(req.params.id);
        console.log(req.params.id)
        if (!result) {
            return response.handleErrorResponse(
                {
                    errorCode: StatusCode.NOT_FOUND,
                    message: "Profile not found"
                },
                res
            );
        }
        return response.handleSuccessResponse(
            result,
            res,
            "success",
            "success"

        );

    }catch(error){
        console.log(error)
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
    if (!result) {
        return response.handleErrorResponse(
            {
                errorCode: StatusCode.NOT_FOUND,
                message: "Profile not found"
            },
            res
        );
    }
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
        if (!result) {
            return response.handleErrorResponse(
                {
                    errorCode: StatusCode.NOT_FOUND,
                    message: "Profile not found"
                },
                res
            );
        }
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