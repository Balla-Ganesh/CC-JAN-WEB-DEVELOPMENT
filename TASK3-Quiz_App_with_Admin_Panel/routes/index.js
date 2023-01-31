var express = require('express');
var router = express.Router();
var controller = require("../controllers/controller");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quizz Application' });
});

router.get('/admin', controller.adminPage);

router.post('/admin',controller.adminPost);

router.post('/questions',controller.questionsPost);

router.get('/quiz',controller.quizPage);



module.exports = router;
