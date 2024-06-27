const profileQuery = require("../queries/student.query");
const reviewQuery=require("../queries/reviewQuery")





const addReview = async (body) => {
    try {
        const { subjectName, teacherName, studentName, studentRollNo, rating, comment } = body;
        const result = { subjectName, teacherName, studentName, studentRollNo, rating, comment };
        
        return await reviewQuery.addReview(result);
    
    } catch(error) {
        console.log(error)
        throw error
    }
};

module.exports={addReview}