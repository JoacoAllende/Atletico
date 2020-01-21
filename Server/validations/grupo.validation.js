const grupoValidator = {};
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'TheSecretKey';
const grupoController = require('../controllers/grupos.controller');

grupoValidator.validar_getGrupos = (req, res) => {
    grupoController.getGrupos(req, res);
}

grupoValidator.validar_editPartido = (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err) => {
        if (!err) {
            grupoController.editPartido(req, res);
        } else {
            res.sendStatus(403);
        }
    })
}

module.exports = grupoValidator;