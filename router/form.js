const {Router} = require ('express');
const { crearForm, recuperarForm, actualizarForm } = require('../controllers/getForm');

const router = Router();
router.post('/createForm', crearForm)
router.post('/getForm', recuperarForm)
router.post('/actualizarForm', actualizarForm)
module.exports = router