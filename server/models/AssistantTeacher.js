const mongoose = require('mongoose');

const AssistantTeacherSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
});

const AssistantTeacher = mongoose.model('AssistantTeacher', AssistantTeacherSchema);

module.exports = AssistantTeacher;
