const express = require('express')
const router = express.Router()
const Course = require("../Models/Course")
const CourseConcept = require('../Models/CourseConcept')
const CourseDescription = require('../Models/CourseDescription')
const fetchCourse = require('../Middelware/fetchCourse')


// ***********************************************  Adding a Course  **************************************************
router.post("/Course", async (req, res) => {
    try {


        const Courses = await Course.create({
            course_name: req.body.course_name,
            course_id: req.body.course_id,
        })



        const savecourse = await Courses.save()


        const getcourseid = {
            id: Courses.id
        }
        const courseid = getcourseid.id

        res.status(200).json({ savecourse, courseid });



    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
}

)



router.get("/getTokens",async (req, res)=>{
    
})
// ***********************************************  Adding a Course Description  **************************************************

// router.post("/description", async (req, res) => {
//     try {

//         const course_description = await CourseDescription.create({
//             heading: req.body.heading,
//             description: req.body.description,
//             CourseConcept: req.header('CourseConcept'),
//         })

//         const saveDescription = await course_description.save()

//         res.status(200).json(saveDescription);

//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("some error occured")
//     }
// }
// )


router.post("/Concept", async (req, res) => {
    try {

        const course_concept = await CourseConcept.create({
            course_concepts: req.body.course_concepts,
            Course: req.header('courseid'),
        })

        const saveCourseConcept = await course_concept.save()

        res.status(200).json(saveCourseConcept);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
}
)

// *******************    Course Concept

router.post("/", async (req, res) => {
    try {

        const new_description = await CourseDescription.create({
            simpleContent: req.body.simpleContent,
            Course: req.header('CourseID'),
        })

        const saveDescription = await new_description.save()

        res.status(200).json(saveDescription);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
}

)




// ***********************************************  Fetching a Course  **************************************************

router.get("/Courses", async (req, res) => {
    try {
        const courses = await Course.find()
        // const notes = await Course.find({ Course ,trainer: req.trainer.id})

        res.status(200).json(courses);


    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})

// ***********************************************  Fetching a CourseDescription  **************************************************

// router.get("/Description", async (req, res) => {
//     try {
//         const descriptions = await CourseDescription.find({ CourseConcept: req.header('CourseConcept') })
//         res.status(200).json(descriptions);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("some error occured")
//     }
// })

// ***********************************************  Fetching a CourseDescription  **************************************************

router.get("/Concepts", fetchCourse, async (req, res) => {
    try {

        // { user: req.user.id }
        // const concepts = await CourseConcept.find({Course:req.header('Course')})
        
        const concepts = await CourseConcept.find({ Course: req.Course })
        res.status(200).json(concepts);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})





module.exports = router
