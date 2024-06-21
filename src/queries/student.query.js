const {studentProfileModel} = require("../models/student.profile.model")
const  {announcementsModel}= require("../models/student.announcement.model")
const  {placementsModel}= require("../models/student.placements.model")

const addStudent = async (body, session) => {
    try {
        const profile =  new studentProfileModel(body);
        const result= await profile.save();
        return result;
    } catch (error) {
        throw error;
    }
}

const editProfile = async (id, body) => {
    try {
        console.log("in queries")
        return await studentProfileModel.findByIdAndUpdate(id, body, { new: true });
    } catch (error) {
        throw error;
    }
}

const viewProfile = async(id) =>{
    try{
        console.log(id,"id in queries")
        let profile= await studentProfileModel.findById(id);
        console.log(profile)
        return profile

    }catch(error){
        throw error;
    }
}

const deleteProfile = async(id) =>{
    try{
        return await studentProfileModel.findByIdAndDelete(id);
        
    }catch(error){
        throw error;
    }
}


const announcements = async() =>{
    try{
        console.log("in queries")
        let announcement= await announcementsModel.find();
        console.log(announcement)
        return announcement;
    }
    catch(error){
        throw error;

}}


const placements = async() =>{
    try{
        console.log("in queries")
        let placement= await placementsModel.find();
        console.log(placement)
        return placement;
        }
    catch(error){
        throw error;
    }
        
    }


module.exports ={
    viewProfile,
    addStudent,
    editProfile,
    deleteProfile,
    announcements,
    placements
}