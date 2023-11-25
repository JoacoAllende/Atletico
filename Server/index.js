const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
var compression = require('compression');
var helmet = require('helmet');

require('./database');

// Settings

app.set('port', process.env.PORT || 3000);

// Middlewares

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({}))

// Routes

app.use(compression());
app.use(require('./routes/usuario.routes'));
app.use(require('./routes/goleador.routes'));
app.use(require('./routes/grupos.routes'));
app.use(require('./routes/equipos.routes'));
app.use(require('./routes/copa.routes'));
app.use(require('./routes/vallaInvicta.routes'));
app.use(require('./routes/tajeta.routes'));
app.use(require('./routes/contador.routes'));
app.use(require('./routes/noticias.routes'));
app.use(require('./routes/partidos.routes'));
// Starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
})