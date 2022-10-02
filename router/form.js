const {Router} = require ('express');
const { crearForm, recuperarForm } = require('../controllers/getForm');

const router = Router();
router.post('/createForm', crearForm)
router.post('/getForm', recuperarForm)
module.exports = router