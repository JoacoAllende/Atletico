const express = require('express');
const router = express.Router();

const noticias = require("../validations/noticias.validation");

router.get('/noticias', noticias.validar_getNoticias);
router.post('/noticias', ensureToken, noticias.validar_createNoticia);
router.put('/noticias', ensureToken, noticias.validar_updateNoticia);
router.delete('/noticias/:id', ensureToken, noticias.validar_deleteNoticia);

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