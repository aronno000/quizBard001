const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  }],
});

const Teacher = mongoose.model('Teacher', TeacherSchema);

module.exports = Teacher;
