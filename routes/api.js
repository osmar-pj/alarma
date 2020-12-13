const express = require('express')
const router = express.Router()
const ParametroController = require('../app/controller/ParametroController')

// Generar las rutas
router.get('/parametro', ParametroController.parametros)
router.post('/parametro', ParametroController.parametro)

module.exports = router