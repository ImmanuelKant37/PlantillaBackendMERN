const {Router} = require ('express');
const { crearForm, recuperarForm } = require('../controllers/getForm');

const router = Router();
router.post('/createList', crearForm)
router.post('/getList', recuperarForm)
module.exports = router