const { default: mongoose } = require("mongoose");

const {Schema}=mongoose

const CourseDescription=new Schema({
    CourseConcept:{       
        type: mongoose.Schema.Types.ObjectId,
        ref:'CourseConcept'
    },
    heading:{type:String},

    description: {
        type: String,
    },
    code: {
        type: String,
    },
    course_img: {
        data: Buffer,
        contentType: String,
    },


})

module.exports = mongoose.model('CourseDescription', CourseDescription)  //course is a name given to model 