
const mongoose= require("mongoose");

const Schema= mongoose.Schema;


//Actual Schema
const StudentSchema = new Schema({
    name: String,
    age:Number
});

//entry into database And document name in database is "student "
const Student = mongoose.model("student",StudentSchema);

//export
module.exports= Student;