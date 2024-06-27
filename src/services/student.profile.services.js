const profileQuery = require("../queries/student.query");
const StatusCode = require("../../commons/utils/statusCode");





const addStudent = async (body) => {
    try {
        const {name,rollno,phone,email,address } = body;
        const result = {name,rollno,phone,email,address};
        
        return await profileQuery.addStudent(result);
    
    } catch(error) {
        console.log(error)
        throw error
    }
};

const viewProfile = async(id) =>{
    try{
        if(!id){
            throw customException.error(
                StatusCode.NOT_FOUND,
                null,
                `${id} not found.`
            );
        }
        
        return await profileQuery.viewProfile(id);
    }
    catch(error){
        throw error
    }
}

//edit student
const editStudentDetails = async (id, body) => {
    try {
        console.log("in services")
        if (!id) {
            return 'Please write the resource ID...'
        }
        if (!await profileQuery.editProfile(id,body)) {
            return ` ${id} is not associted with any id. Please check...`
        }
        const editProfile = await profileQuery.editProfile(id, body);
        return editProfile;
    } catch (error) {
        throw error;
    }
}

//delete Student
const deleteStudent = async(id) =>{
    try{
        if(!id){
            throw customException.error(
                StatusCode.NOT_FOUND,
                null,
                `${id} not found.`
            );
        }
        return await profileQuery.deleteProfile(id);
    }catch(error){
        throw error;
    }

}













            


//announcements
const announcements = async()=>{
    try{
        console.log("in services")
        return await profileQuery.announcements();
        }
        catch(error){
            throw error
            }
}


//placements
const placements= async()=>{
    try{
        console.log("in services")
        return await profileQuery.placements();
        }
        catch(error){
            throw error
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