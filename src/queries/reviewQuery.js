const  {ReviewModel}= require("../models/student.review.model")

const addReview = async (body) => {
    try {
        const Review =  new ReviewModel(body);
        const result= await Review.save();
        return result;
    } catch (error) {
        throw error;
    }
}
module.exports={addReview}