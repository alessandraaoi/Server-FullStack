// ------------ CONTROLLER: LOGIN (POST)

const bcrypt = require('bcrypt');
const User = require('../models/users');

const login = async (req, res) => {
    const {correo, hashedPassword} = req.body;

    User.findOne({'correo': correo}).then((user) => {
        if(!user) {
            return res.json({mensaje: 'Usuario no encontrado', user: {_id: "NOTFOUND", nombre: "NOTFOUND"}}  )
        }
        ///console.log(hashedPassword);
        //console.log(user.password);
      //  bcrypt.compare(password, user.password).then((correctPassword) => {
        console.log(hashedPassword === user.password);
        if (hashedPassword===user.password)  {
           // if (correctPassword) {
                const { _id, nombre} = user;
                return res.json({mensaje: 'Usuario logeado correctamente', user: {_id, nombre}});
            } else {
                return res.json({mensaje: 'Password incorrecta',  user: {_id: "NOTFOUND", nombre: "NOTFOUND"}})
            }
        //} // )
    })
}

module.exports = login;