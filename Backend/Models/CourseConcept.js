const { default: mongoose } = require("mongoose");

const {Schema}=mongoose

const CourseConcept=new Schema({
    
    Course:{       
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    },
    course_concepts: {
        type: String,
        unique: true
        // required: true
    },
    

})

module.exports = mongoose.model('CourseConcept',CourseConcept)  //course is a name given to model 