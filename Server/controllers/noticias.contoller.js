const noticiasController = {};

const mysqlConnection = require('../database');

noticiasController.getNoticias = async (req, res, next) => {
    const query = `SELECT * FROM noticias`
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err.errno);
        }
    })
};

module.exports = noticiasController;