const express = require('express');
const router = express.Router();

//?Importaciones
const inicioControllers = require('../controllers/inicioControllers');
const loginControllers = require('../controllers/loginControllers');
const registroControllers = require('../controllers/registroControllers');
const salasControllers = require('../controllers/salasControllers');

//Inicio
router.get('/', inicioControllers.paginaInicio);

//Login
router.get('/login', loginControllers.mostrarLogin);
router.post('/login', loginControllers.ingresarUsuario);

//Registro
router.get('/registro', registroControllers.mostrarRegistro);
router.post('/registro', registroControllers.registroUsuario);

//Chat
router.get('/salas', salasControllers.paginaSalas);
router.post('/salas', salasControllers.crearSala);


module.exports = router;

