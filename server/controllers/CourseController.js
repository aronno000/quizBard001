const Course = require('../models/Course');

class CourseController {

    async createCourse(req, res) {
        const course = new Course(req.body);
        await course.save();

        res.json(course);
    }

    async getCourses(req, res) {
        const courses = await Course.find();

        res.json(courses);
    }

    async getCourseById(req, res) {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.json(course);
    }

    async updateCourse(req, res) {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        course.set(req.body);
        await course.save();

        res.json(course);
    }

    async deleteCourse(req, res) {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        await course.remove();

        res.json({ message: 'Course deleted successfully' });
    }
}

module.exports = CourseController;
