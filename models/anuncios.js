// -------------- MODELO DE ANUNCIO
const mongoose = require('mongoose')
const {Schema} = require('mongoose');

// En la constante 'anuncioSchema', defino los campos que tendrán los anuncios
// Defino el tipo de dato de cada campo 
 
const anuncioSchema = new Schema ({
    title: {
        type: String
    },
    description: {
        type: String
    },
    userid: {
        type: String
    },
    // _id: {
    //     type: mongoose.Schema.Types.ObjectId
    // }
})

// exporto el modelo de anuncio 'Anuncio' 
module.exports = mongoose.model('Anuncio', anuncioSchema);


