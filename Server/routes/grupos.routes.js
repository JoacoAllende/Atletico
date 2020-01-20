const express = require('express');
const router = express.Router();

const grupo = require("../validations/grupo.validation");

router.get('/grupos/:to/:a', grupo.validar_getGrupos);
router.put('/grupos/:to/:a', grupo.validar_editPartido);


module.exports = router;