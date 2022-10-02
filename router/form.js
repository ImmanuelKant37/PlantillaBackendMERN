const {Router} = require ('express');
const { crearForm, recuperarForm, actualizarForm, eliminarForm } = require('../controllers/getForm');

const router = Router();
router.post('/createForm', crearForm)
router.post('/getForm', recuperarForm)
router.post('/actualizarForm', actualizarForm)
router.post('/eliminarForm', eliminarForm)
module.exports = router