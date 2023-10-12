const AssistantTeacherController = require('../controllers/AssistantTeacherController');

const router = express.Router();

router.post('/', AssistantTeacherController.createAssistantTeacher);
router.get('/', AssistantTeacherController.getAssistantTeachers);
router.get('/:id', AssistantTeacherController.getAssistantTeacherById);
router.put('/:id', AssistantTeacherController.updateAssistantTeacher);
router.delete('/:id', AssistantTeacherController.deleteAssistantTeacher);

module.exports = router;
