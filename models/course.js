const { Schema, model }  = require("mongoose");

const courseSchema = new Schema({
    course_name: {type: String, required: true},
    course_description: {type: String, required: true},
    course_classroom: {type: String, required: true},
    course_quota: {type: Number},
    course_population: {type: Number},
    course_teacher: {type: Schema.Types.ObjectId}
});

module.exports = model("Course", courseSchema);