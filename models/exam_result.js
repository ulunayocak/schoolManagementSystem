const { Schema, model }  = require("mongoose");

const examResultSchema = new Schema({
    exam: {type: Schema.Types.ObjectId, required: true},
    exam_course: {type: Schema.Types.ObjectId, required: true},
    exam_result: [{student_id: Schema.Types.ObjectId, mark: Number}]
});

module.exports = model("ExamResult", examResultSchema);