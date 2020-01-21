const copaValidator = {};
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'TheSecretKey';
const copaController = require('../controllers/copa.controller');

copaValidator.validar_getPartidos = (req, res) => {
    copaController.getPartidos(req, res);
}

copaValidator.validar_editPartido = (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err) => {
        if (!err) {
            copaController.editPartido(req, res);
        } else {
            res.sendStatus(403);
        }
    })
}

module.exports = copaValidator;