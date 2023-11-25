const express = require('express');
const router = express.Router();

const partidos = require("../validations/partidos.validation");

router.get('/partidos-horarios', partidos.validar_getHorarioPartidos);
router.get('/partidos-equipos-grupo/:to/:a/:g', partidos.validar_getEquiposGrupo);
router.post('/partidos/:to/:a', ensureToken, partidos.validar_createPartido);
router.put('/partidos/:to/:a', ensureToken, partidos.validar_updatePartido);
router.delete('/partidos/:id', ensureToken, partidos.validar_deletePartido);

function ensureToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = router;