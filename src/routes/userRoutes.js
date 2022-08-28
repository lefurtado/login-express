const express = require('express');
const router = express.Router();

//Controllers

const UserController = require('../controllers/UserController');

//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validadeRegisterMiddleware');

//formulário de registro
router.get('/register', UserController.register);

//Processar o registro 
router.post('/register', uploadFile.single('avatar'), validations, UserController.processRegister);

//formulário de login
router.get('/login', UserController.login);

//processar o login
router.post('/login', UserController.loginProcess);

//perfil do usuário
router.get('/profile', UserController.profile);

//logout
router.get('/logout/', UserController.logout);

module.exports = router;
