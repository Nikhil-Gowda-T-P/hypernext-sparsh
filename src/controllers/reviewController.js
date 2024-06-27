const StatusCode = require("../../commons/utils/statusCode");
const response = require("../../commons/response/response");
const reviewService = require("../services/student.review.services");



const addReview = async (req, res) => {
    try {
        console.log(req.body);
        const result = await reviewService.addReview(req.body);
        return response.handleSuccessResponse(
            result,
            res,
            "Successfully",
            "Successfully"
        );
    } catch (err) {
        // Check for specific error types
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

module.exports={addReview}