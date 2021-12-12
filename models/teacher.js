const { Schema, model }  = require("mongoose");

const teacherSchema = new Schema({
    teacher_name: {type: String, required: true},
    teacher_surname: {type: String, required: true},
    teacher_email: {type: String, required: true},
    teacher_password: {type: String, required: true},
    teacher_birthDate: {type: String, require: true},
    teacher_age: new Date().getFullYear() - Number(this.teacher_birthDate.split("/")[2]),
    teacher_profession: {type: String, required: true},
    teacher_status: {type: Boolean, required:true}
});

module.exports = model("Teacher", teacherSchema);