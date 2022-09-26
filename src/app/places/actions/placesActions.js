const {findPlaces} = require('../functions/placeFunctions');


// validamos que vengan los campos solicitados para la creacion
exports.validarQueryParams = async (req, res, next) => {
    const { location } = req.query;
    if (!location) {
        res.status(400).json({
            mensaje: 'Location required'
        });
    }
    else { next(); }
};


// optenemos los lugares dadas las coordenadas
exports.getPlaces = async (req, res, next) => {
    const { location } = req.query;
    const places = await findPlaces(location);
    console.log(places);
    res.status(400).send({
        places : places['data']['results'],
        status : places['data']['status']
    });
}
