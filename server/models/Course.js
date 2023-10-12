const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: String,
  description: String,
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  }],
  exams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
  }],
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
