/*
path: api/login
*/

const {Router} = require ('express');
const { check } = require('express-validator');
const { crearUsuario, login, renewToken } = require('../controllers/auth');
const { validarcampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();
//Crear nuevos usuarios 
router.post( '/new',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().notEmpty(),
    validarcampos
], crearUsuario)
//login
router.post( '/',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().notEmpty(),
    validarcampos
], login)

router.get( '/renew',validarJWT, renewToken)
//Crear lista 



module.exports = router;