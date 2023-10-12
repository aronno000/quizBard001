const AssistantTeacher = require('../models/AssistantTeacher');

class AssistantTeacherController {

    async createAssistantTeacher(req, res) {
        const assistantTeacher = new AssistantTeacher(req.body);
        await assistantTeacher.save();

        res.json(assistantTeacher);
    }

    async getAssistantTeachers(req, res) {
        const assistantTeachers = await AssistantTeacher.find();

        res.json(assistantTeachers);
    }

    async getAssistantTeacherById(req, res) {
        const assistantTeacher = await AssistantTeacher.findById(req.params.id);
        if (!assistantTeacher) {
            return res.status(404).json({ message: 'Assistant teacher not found' });
        }

        res.json(assistantTeacher);
    }

    async updateAssistantTeacher(req, res) {
        const assistantTeacher = await AssistantTeacher.findById(req.params.id);
        if (!assistantTeacher) {
            return res.status(404).json({ message: 'Assistant teacher not found' });
        }

        assistantTeacher.set(req.body);
        await assistantTeacher.save();

        res.json(assistantTeacher);
    }

    async deleteAssistantTeacher(req, res) {
        const assistantTeacher = await AssistantTeacher.findById(req.params.id);
        if (!assistantTeacher) {
            return res.status(404).json({ message: 'Assistant teacher not found' });
        }

        await assistantTeacher.remove();

        res.json({ message: 'Assistant teacher deleted successfully' });
    }
}

module.exports = AssistantTeacherController;
