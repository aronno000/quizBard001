const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  text: String,
  type: String,
  answers: [{
    text: String,
    correct: Boolean,
  }],
  exam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
  },
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
