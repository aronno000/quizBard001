const Student = require('../models/Student');

class StudentController {

    async createStudent(req, res) {
        const student = new Student(req.body);
        await student.save();

        res.json(student);
    }

    async getStudents(req, res) {
        const students = await Student.find();

        res.json(students);
    }

    async getStudentById(req, res) {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json(student);
    }

    async updateStudent(req, res) {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        student.set(req.body);
        await student.save();

        res.json(student);
    }

    async deleteStudent(req, res) {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        await student.remove();

        res.json({ message: 'Student deleted successfully' });
    }
}

module.exports = StudentController;
