const Question = require('../models/Question');

class QuestionController {

    async createQuestion(req, res) {
        const question = new Question(req.body);
        await question.save();

        res.json(question);
    }

    async getQuestions(req, res) {
        const questions = await Question.find();

        res.json(questions);
    }

    async getQuestionById(req, res) {
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        res.json(question);
    }

    async updateQuestion(req, res) {
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        question.set(req.body);
        await question.save();

        res.json(question);
    }

    async deleteQuestion(req, res) {
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        await question.remove();

        res.json({ message: 'Question deleted successfully' });
    }
}

module.exports = QuestionController;
