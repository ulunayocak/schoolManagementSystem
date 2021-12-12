const { Schema, model }  = require("mongoose");

const examSchema = new Schema({
    exam_type: {type: String, required: true},
    exam_course: {type: Schema.Types.ObjectId, required: true},
    exam_classroom: {type: Schema.Types.ObjectId, required: true},
    exam_start_date: {type: Date, required: true},
    exam_end_date: {type: Date, required: true}
});

module.exports = model("Exam", examSchema);