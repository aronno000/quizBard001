const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  name: String,
  description: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
  }],
  startTime: Date,
  endTime: Date,
});

const Exam = mongoose.model('Exam', ExamSchema);

module.exports = Exam;
