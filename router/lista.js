const {Router} = require ('express');
const { crearLista, recuperarLista } = require('../controllers/getLista');

const router = Router();
router.post('/createList', crearLista)
router.post('/getList', recuperarLista)
module.exports = router