const { Schema, model }  = require("mongoose");

const classroomSchema = new Schema({
    classroom_building: {type: String, required: true},
    classroom_name: {type: String, required: true},
});

module.exports = model("Classroom", classroomSchema);