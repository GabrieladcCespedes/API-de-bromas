const Broma = require('../modelos/chistes.model');

module.exports.obtenerTodasLasBromas = (req, res) => {
    Broma.find()
        .then(bromas => res.json(bromas))
        .catch(err => res.json({ message: 'Algo salió mal', error: err }));
};

module.exports.obtenerBroma = (req, res) => {
    Broma.findOne({ _id: req.params.id })
        .then(broma => res.json(broma))
        .catch(err => res.json({ message: 'Algo salió mal', error: err }));
};

module.exports.crearBroma = (req, res) => {
    Broma.create(req.body)
        .then(nuevaBroma => res.json(nuevaBroma))
        .catch(err => res.json({ message: 'Algo salió mal', error: err }));
};

module.exports.actualizarBroma = (req, res) => {
    Broma.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(bromaActualizada => res.json(bromaActualizada))
        .catch(err => res.json({ message: 'Algo salió mal', error: err }));
};

module.exports.eliminarBroma = (req, res) => {
    Broma.deleteOne({ _id: req.params.id })
        .then(resultado => res.json(resultado))
        .catch(err => res.json({ message: 'Algo salió mal', error: err }));
};
