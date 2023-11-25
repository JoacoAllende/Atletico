const express = require('express');
const router = express.Router();

const equipos = require("../validations/equipos.validation");

router.get('/equipos', equipos.validar_getEquipos);
router.post('/equipos/:to/:a', ensureToken, equipos.validar_createEquipo);
router.put('/equipos/:to/:a', ensureToken, equipos.validar_updateEquipo);
router.delete('/equipos/:id', ensureToken, equipos.validar_deleteEquipo);

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