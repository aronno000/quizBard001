const TeacherController = require('../controllers/TeacherController');

const router = express.Router();

router.post('/', TeacherController.createTeacher);
router.get('/', TeacherController.getTeachers);
router.get('/:id', TeacherController.getTeacherById);
router.put('/:id', TeacherController.updateTeacher);
router.delete('/:id', TeacherController.deleteTeacher);

module.exports = router;
