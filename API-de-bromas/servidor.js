const express = require('express');
const cors = require('cors');
require('./configuracion/mongoose.config');

const chistesRutas = require('./rutas/chistes.routes');

const app = express();
const puerto = 8000;

app.use(cors());
app.use(express.json());

app.use('/api/chistes', chistesRutas);

app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
