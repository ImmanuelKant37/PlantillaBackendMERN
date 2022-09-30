const {Router} = require ('express');
const { crearLista } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarcampos } = require('../middlewares/validar-campos');

const router = Router();
router.post('/createList', crearLista)
module.exports = router