const {Router} = require ('express');
const { crearLista } = require('../controllers/auth');


const router = Router();
router.post('/createList',[check('clave', 'Clave es obligatorio').not().notEmpty(),
validarcampos
], crearLista)
module.exports = router