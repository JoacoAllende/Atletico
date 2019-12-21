const goleadorValidator = {};
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'TheSecretKey';

const goleadorController = require('../controllers/goleador.contoller');

goleadorValidator.validar_createGoleador = (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err) => {
        if (!err) {
            goleadorController.createGoleador(req, res);
        } else {
            res.sendStatus(403);
        }
    })
}

goleadorValidator.validar_getGoleadores = (req, res) => {
    goleadorController.getGoleadores(req, res);
}

goleadorValidator.validar_updateGoleador = (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err) => {
        if (!err) {
            goleadorController.updateGoleador(req, res);
        } else {
            res.sendStatus(403);
        }
    })
}

module.exports = goleadorValidator;