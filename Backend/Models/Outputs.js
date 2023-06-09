const { default: mongoose } = require("mongoose");

const {Schema}=mongoose

const Output=new Schema({
    CourseConcept:{       
        type: mongoose.Schema.Types.ObjectId,
        ref:'CourseConcept'
    },
   
    course_img: {
        data: Buffer,
        contentType: String,
    },


})

module.exports = mongoose.model('Output', Output)  //course is a name given to model 