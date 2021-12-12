const { Schema, model }  = require("mongoose");

const parentSchema = new Schema({
    parent_name: {type: String, required: true},
    parent_surname: {type: String, required: true},
    parent_birthDate: {type: String, require: true},
    parent_age: new Date().getFullYear() - Number(this.parent_birthDate.split("/")[2]),
    parent_phone: {type: String, required: true},
});

module.exports = model("Parent", parentSchema);