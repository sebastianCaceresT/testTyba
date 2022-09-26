const axios = require('axios').default;

require('dotenv').config();


// buscamos los lugares con ayuda de la api de google maps
exports.findPlaces = async (location) => {
    return await axios.get('https://maps.googleapis.com/maps/api/place/search/json', {
        params: {
            location: location,
            radius : 5000,
            types : "restaurant|food",
            key : process.env.KEY_GOOGLE_MAPS
        }
      })
};