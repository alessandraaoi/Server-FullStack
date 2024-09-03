// ------------ CONTROLLER: BUSCAR USUARIO POR ID (GET)

const User = require('../models/users')

const getUser = async (req, res) => {
    const {userId} = req.params;
    console.log("chiamato getuser server con id=", userId);
    if(userId.length === 24) 
    // 24 porque las ids creadas por MONGODB tienen 24 caracteres
     {
        User.findById({'_id' : userId}).then((user) => {
            if(!user) {
                return res.json({mensaje: 'Usuario no encontrado'})
            } else {
                const { _id, password, __v, ...resto} = user._doc;
                console.log(resto);
                res.json(resto);
            }
        })
    } else {
        res.json ({mensaje: 'Password incorrecta'})
    }
}

module.exports = getUser;