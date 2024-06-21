const express = require("express")
const router = express.Router()
const studentController = require("../controllers/student.controller")


router.get("/view-studentDetails/:id",studentController.viewProfile);
router.get('/announcements',studentController.announcements)
router.get("/placements",studentController.placements)

router.post("/addStudent",studentController.addStudent)
router.put("/editStudentDetails/:id",studentController.editStudentDetails);
router.delete("/deleteStudent/:id",studentController.deleteStudent);


module.exports = router;