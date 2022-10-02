const {Router} = require ('express');
const { crearForm, recuperarForm, actualizarForm, eliminarForm, buscarForm } = require('../controllers/getForm');

const router = Router();
router.post('/crearForm', crearForm)
router.post('/getForms', recuperarForm)
router.post('/buscarForm', buscarForm)
router.post('/actualizarForm', actualizarForm)
router.post('/eliminarForm', eliminarForm)
module.exports = router