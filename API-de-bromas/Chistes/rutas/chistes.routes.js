const express = require('express');
const router = express.Router();
const ChistesController = require('../controladores/chistes.controller');

router.get('/', ChistesController.obtenerTodasLasBromas);
router.get('/:id', ChistesController.obtenerBroma);
router.post('/', ChistesController.crearBroma);
router.put('/:id', ChistesController.actualizarBroma);
router.delete('/:id', ChistesController.eliminarBroma);

module.exports = router;
