var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');

router.get('/', userController.homePage);

router.get('/index',userController.newNotes);

router.post('/index', userController.newNotesPost ,userController.newNotes);

router.get('/details/:noteName',userController.getDetails);

router.get('/delete/:noteName',userController.deleteGet);

router.get('/edit/:notes',userController.editNotes);

router.get('/update',userController.updateGet);

router.post('/update',userController.updateNotes);

router.get('/deletes/:notes',userController.deleteNotes);


module.exports = router;
