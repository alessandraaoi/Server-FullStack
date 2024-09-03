// -------------- MODELO DE USUARIO 
const mongoose = require('mongoose')
const {Schema} = require('mongoose');

// En la constante 'userSchema', defino los campos que tendrán los usuarios
// Defino el tipo de dato de cada campo 
 
const userSchema = new Schema ({
    nombre: { 
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('User', userSchema);

// exporto el modelo de usuario 'User' 
