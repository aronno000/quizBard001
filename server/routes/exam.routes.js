const ExamController = require('../controllers/ExamController');

const router = express.Router();

router.post('/', ExamController.createExam);
router.get('/', ExamController.getExams);
router.get('/:id', ExamController.getExamById);
router.put('/:id', ExamController.updateExam);
router.delete('/:id', ExamController.deleteExam);

module.exports = router;
