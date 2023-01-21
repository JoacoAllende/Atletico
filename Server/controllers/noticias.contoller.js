const noticiasController = {};

const mysqlConnection = require('../database');

noticiasController.getNoticias = async (req, res, next) => {
    const query = `SELECT * FROM noticias ORDER BY fecha DESC;`;
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err.errno);
        }
    })
};

noticiasController.createNoticia = (req, res) => {
    const noticia = req.body;
    const query = `INSERT INTO noticias (titulo, cuerpo, imagen, fecha) VALUES ('${noticia.titulo}', '${noticia.cuerpo}', '${noticia.imagen}', '${noticia.fecha}');`;
    mysqlConnection.query(query, (err) => {
        if(!err) {
            res.json({
                'status' : 'created'
            })
        } else {
            res.json(err.errno);
        }
    })
};

noticiasController.updateNoticia = (req, res) => {
    const noticia = req.body;
    const query = `UPDATE noticias SET titulo = '${noticia.titulo}', cuerpo = '${noticia.cuerpo}', imagen = '${noticia.imagen}', fecha = '${noticia.fecha}' WHERE id = ${noticia.id};`
    mysqlConnection.query(query, (err) => {
        if (!err) {
            res.json({
                'status': 'updated'
            });
        } else {
            res.json(err.errno);
        }
    })
}

noticiasController.deleteNoticia = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM noticias WHERE id = ${id};`
    mysqlConnection.query(query, (err) => {
        if (!err) {
            res.json({
                'status': 'updated'
            });
        } else {
            res.json(err.errno);
        }
    })
}

module.exports = noticiasController;