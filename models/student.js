const { Schema, model }  = require("mongoose");

const studentSchema = new Schema({
    student_name: {type: String, required: true},
    student_surname: {type: String, required: true},
    student_email: {type: String, required: true},
    student_password: {type: String, required: true},
    student_birthDate: {type: String, require: true},
    student_age: new Date().getFullYear() - Number(this.student_birthDate.split("/")[2]),
    student_number: {type: String, required: true},
    student_phone: {type: String, required: true},
    courses: {type: Array},
    exam_results: {type: Array},
    attendances: [{course_id: Schema.Types.ObjectId, absent_days: Number}],
    student_date_of_join: {type: Date, required: true},
    student_status: {type: Boolean, required: true},
    student_parent: {type: Schema.Types.ObjectId}
});

module.exports = model("Student", studentSchema);