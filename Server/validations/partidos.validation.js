const partidosValidator = {};
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'TheSecretKey';
const partidosController = require('../controllers/partidos.controller');


partidosValidator.validar_getHorarioPartidos = (req, res) => {
    partidosController.getHorarioPartidos(req, res);
}

partidosValidator.validar_getEquiposGrupo = (req, res) => {
    partidosController.getEquiposGrupo(req, res);
}

// partidosValidator.validar_createPartido = (req, res) => {
//     jwt.verify(req.token, SECRET_KEY, (err) => {
//         if (!err) {
//             partidosController.createPartido(req, res);
//         } else {
//             res.sendStatus(403);
//         }
//     })
// }

// partidosValidator.validar_updatePartido = (req, res) => {
//     jwt.verify(req.token, SECRET_KEY, (err) => {
//         if (!err) {
//             partidosController.updatePartido(req, res);
//         } else {
//             res.sendStatus(403);
//         }
//     })
// }

// partidosValidator.validar_deletePartido = (req, res) => {
//     jwt.verify(req.token, SECRET_KEY, (err) => {
//         if (!err) {
//             partidosController.deletePartido(req, res);
//         } else {
//             res.sendStatus(403);
//         }
//     })
// }

module.exports = partidosValidator;