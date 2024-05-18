const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    name : {type:String, required:true},
    email : {type :String , required : true},
    age : {type :  Number , required : true},
    rollnumber : {type : String , required : true},
    branch : {type : String , required : true},
    gender :{type : String , required : true}

})

const Student = mongoose.model('student',studentSchema);
module.exports = Student;