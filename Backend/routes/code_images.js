const express = require('express')
const router = express.Router()
const CourseDescription = require('../Models/CourseDescription')

const multer = require("multer");

const bodyParser = require("body-parser");
const fs = require("fs");
const Outputs = require('../Models/Outputs');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage: storage });



  router.post("/descriptions", async (req, res) => {
    try {

        const new_description = await CourseDescription.create({
          heading: req.body.heading,
          description: req.body.description,
          code: req.body.code,
          CourseConcept: req.header('CourseConcept'),
        })

        const saveDescription = await new_description.save()

        res.status(200).json(saveDescription);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
}

)





  router.post("/description/image", upload.single('testImage'), (req, res) => {
    const files = req.files;

    const saveImage = Outputs({
  

        CourseConcept: req.header('CourseConcept'),

   
      course_img: {
        data: fs.readFileSync("uploads/" + req.file.filename),
        contentType: "image/png",
      },
  
      
  
    });
    
    saveImage
      .save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
    res.send('image is saved')
  }
  );






// router.post("/descriptions",upload.single('testImage'), async (req, res) => {
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


router.get("/get_descriptions", async (req, res) => {
    try {
        const descriptions = await CourseDescription.find({ CourseConcept: req.header('CourseConcept') })
        res.status(200).json(descriptions);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})

router.get("/get_outputs", async (req, res) => {
  try {
      const output = await Outputs.find({ CourseConcept: req.header('CourseConcept') })
      res.status(200).json(output);
  } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured")
  }
})

module.exports = router
