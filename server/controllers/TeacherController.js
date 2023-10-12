const Teacher = require('../models/Teacher');

class TeacherController {

    async createTeacher(req, res) {
        const teacher = new Teacher(req.body);
        await teacher.save();

        res.json(teacher);
    }

    async getTeachers(req, res) {
        const teachers = await Teacher.find();

        res.json(teachers);
    }

    async getTeacherById(req, res) {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        res.json(teacher);
    }

    async updateTeacher(req, res) {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        teacher.set(req.body);
        await teacher.save();

        res.json(teacher);
    }

    async deleteTeacher(req, res) {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        await teacher.remove();

        res.json({ message: 'Teacher deleted successfully' });
    }
}

module.exports = TeacherController;
