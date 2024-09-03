// ------------ CONTROLLER: REGISTRO DE UN NUEVO USUARIO (POST)

const bcrypt = require('bcrypt') // para: encryptar password
const User = require('../models/users')

const register = async (req, res) => {
    const {nombre, correo, password} = req.body;

    User.findOne({correo}).then((user) => {
        if(user){
            return res.json({mensaje: 'Ya existe un usuario con este correo'})
        } else if(!nombre || !password || !correo){
            return res.json({mensaje: 'Nombre/password/correo no encontrados'})
        } else {
            bcrypt.hash(password, 10, (error, hashedPassword) => {
                if(error) res.json({error});
                else {
                const newUser = new User({
                    nombre,
                    correo,
                    password: hashedPassword
                });
                
                newUser
                .save()
                .then((user) => {
                   res.json({mensaje: 'Usuario creado correctamente', user}) 
                })
                .catch(error => console.error(error))
            }   
            })
        }
    })
}

module.exports = register;