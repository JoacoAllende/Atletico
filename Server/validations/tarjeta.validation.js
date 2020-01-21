const tarjetaValidator = {};
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'TheSecretKey';
const tarjetaController = require('../controllers/tarjeta.controller');

tarjetaValidator.validar_getTarjetas = (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err) => {
        if (!err) {
            tarjetaController.getTarjetas(req, res);
        } else {
            res.sendStatus(403);
        }
    })
}

tarjetaValidator.validar_editTarjetas = (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err) => {
        if (!err) {
            tarjetaController.editTarjetas(req, res);
        } else {
            res.sendStatus(403);
        }
    })
}

module.exports = tarjetaValidator;