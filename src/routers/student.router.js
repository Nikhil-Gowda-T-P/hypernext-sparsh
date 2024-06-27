const express = require("express")
const router = express.Router()
const studentController = require("../controllers/student.controller")
const ResultController=require("../controllers/result.controller")
const feesController=require("../controllers/fees.controller")
const reviewController=require("../controllers/reviewController")


const AttendanceController=require("../controllers/attendance.controller")




router.post("/addStudent",studentController.addStudent)
router.post("/addReview",reviewController.addReview)


router.get('/getAttendance', AttendanceController.getAttendance);
router.get('/getResult', ResultController.viewResult);
router.get("/view-studentDetails/:id",studentController.viewProfile);
router.get('/announcements',studentController.announcements)
router.get("/placements",studentController.placements)
router.get("/viewFees",feesController.viewFees)
router.get("/pendingFees",feesController.pendingFees)




router.put("/editStudentDetails/:id",studentController.editStudentDetails);

router.delete("/deleteStudent/:id",studentController.deleteStudent);



module.exports = router;