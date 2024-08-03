const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/chistes_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a la base de datos chistes_db'))
.catch(err => console.error('Error al conectar a la base de datos', err));