const { default: mongoose } = require("mongoose");

const {Schema}=mongoose

const CourseSchema=new Schema({

    course_name: {
        type: String,
        // required: true
    },

    course_id: {
        type: Number,
        // required: true,
        unique: true
    },

})

module.exports = mongoose.model('Course', CourseSchema)  //course is a name given to model 