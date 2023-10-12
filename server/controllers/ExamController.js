const Exam = require('../models/Exam');

class ExamController {

    async createExam(req, res) {
        const exam = new Exam(req.body);
        await exam.save();

        res.json(exam);
    }

    async getExams(req, res) {
        const exams = await Exam.find();

        res.json(exams);
    }

    async getExamById(req, res) {
        const exam = await Exam.findById(req.params.id);
        if (!exam) {
            return res.status(404).json({ message: 'Exam not found' });
        }

        res.json(exam);
    }

    async updateExam(req, res) {
        const exam = await Exam.findById(req.params.id);
        if (!exam) {
            return res.status(404).json({ message: 'Exam not found' });
        }

        exam.set(req.body);
        await exam.save();

        res.json(exam);
    }

    async deleteExam(req, res) {
        const exam = await Exam.findById(req.params.id);
        if (!exam) {
            return res.status(404).json({ message: 'Exam not found' });
        }

        await exam.remove();

        res.json({ message: 'Exam deleted successfully' });
    }
}

module.exports = ExamController;
