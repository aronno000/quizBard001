const StudentController = require('../controllers/StudentController');

const router = express.Router();

router.post('/', StudentController.createStudent);
router.get('/', StudentController.getStudents);
router.get('/:id', StudentController.getStudentById);
router.put('/:id', StudentController.updateStudent);
router.delete('/:id', StudentController.deleteStudent);

module.exports = router;
