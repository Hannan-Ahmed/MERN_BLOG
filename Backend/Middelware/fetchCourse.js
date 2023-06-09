
const fetchCourse= (req,res,next)=>{
//get the user from jwt tocken and add id to it.
const token=req.header('CourseID');
//if tocken is not present then send access denied 
if(!token)
{
   res.status(401).send({error:"You dont have Course id in header."})
} 

try {
    req.Course=token;

    // req.Course=req.header('Course')
        next(); 
} catch (error) {
       res.status(401).send({error:"Course id in header not VALID."})

}

}

module.exports=fetchCourse;