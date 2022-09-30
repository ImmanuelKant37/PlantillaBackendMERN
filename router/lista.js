const {Router} = require ('express');
const { crearLista } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarcampos } = require('../middlewares/validar-campos');

const router = Router();
router.post('/createList',[check('clave', 'Clave es obligatorio').not().notEmpty(),
validarcampos
], crearLista)
module.exports = router