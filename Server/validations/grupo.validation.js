const grupoValidator = {};

const grupoController = require('../controllers/grupos.controller');

grupoValidator.validar_getGrupos = (req, res) => {
    grupoController.getGrupos(req, res);
}

grupoValidator.validar_editPartido = (req, res) => {
    grupoController.editPartido(req, res);
}

module.exports = grupoValidator;