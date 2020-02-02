const express = require('express');
const router = express.Router();

const contador = require("../validations/contador.validation");

router.put('/contador', contador.validar_updateContador);

module.exports = router;