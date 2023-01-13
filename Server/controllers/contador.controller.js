const contadorController = {};

const mysqlConnection = require('../database');

contadorController.updateContador = (req, res) => {
    const contador = req.body;
    const anio = contador.anio;
    const cant = contador.cantidad;
    const query = `UPDATE contadorVisitas SET cont = cont = ${cant} WHERE anio = ${anio};`
    mysqlConnection.query(query, (err, rows) => {
        if (!err) {
            res.json('updated');
        } else {
            console.log(err);
        }
    })

};

module.exports = contadorController;