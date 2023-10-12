const QuestionController = require('../controllers/QuestionController');

const router = express.Router();

router.post('/', QuestionController.createQuestion);
router.get('/', QuestionController.getQuestions);
router.get('/:id', QuestionController.getQuestionById);
router.put('/:id', QuestionController.updateQuestion);
router.delete('/:id', QuestionController.deleteQuestion);

module.exports = router;
