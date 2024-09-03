// ------------ CONTROLLER: BUSCAR ANUNCIO POR ID (GET)

const Anuncio = require('../models/anuncios')

const getAnuncio = async (req, res) => {
    const {userId} = req.params;
    console.log("chiamato anuncio server con id=", userId);
   
    //userid= localStorage.getItem('_id');
    console.log('annuncio', userId);
    if(userId.length === 24) 
    // 24 porque las ids creadas por MONGODB tienen 24 caracteres
     {
        Anuncio.find({'userid' : userId}).then((anuncio) => {
            if(!anuncio) {
                return res.json({mensaje: 'Anuncio no encontrado'})
            } else {
                console.log(anuncio);
                const {_id, title, description,userid, ...resto} = anuncio;
                //console.log(resto);
                res.json(anuncio);
            }
        })
    } else {
        res.json ({mensaje: 'parameter incorrecto'})
    }
}

module.exports = getAnuncio;