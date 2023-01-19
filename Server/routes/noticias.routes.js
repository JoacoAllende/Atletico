const express = require('express');
const router = express.Router();

const noticias = require("../validations/noticias.validation");

router.get('/noticias', noticias.validar_getNoticias);

module.exports = router;