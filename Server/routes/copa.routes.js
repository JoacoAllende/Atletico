const express = require('express');
const router = express.Router();

const partidos = require("../validations/copa.validation");

router.get('/copa/:copa/:to/:a', partidos.validar_getPartidos);
router.put('/copa/:copa/:to/:a', ensureToken, partidos.validar_editPartido);

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