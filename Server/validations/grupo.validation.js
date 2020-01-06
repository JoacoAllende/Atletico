const grupoValidator = {};

const grupoController = require('../controllers/grupos.controller');

grupoValidator.validar_getGrupos = (req, res) => {
    grupoController.getGrupos(req, res);
}

module.exports = grupoValidator;