// // -------------- CONTROLADOR DE USUARIOS
 
// const User = require('../models/users');
// const bcrypt = require('bcrypt');

// // importo el modelo de usuario creado previamente en 'users.js'

// // -------------- FUNCIÓN READUSERS PARA: TRAER DATOS DE MONGO (READ) PARA HACER EL LOGIN - PETICIÓN POST
// exports.readUsers =  async (req,res) => { 

// const {nombre, password} = req.body; 

//     console.log(`${nombre}`);
//     console.log(`${password}`);
    
//        User.findOne({nombre: nombre}).then( (results) => {
            
//             console.log(results);
//             if(!results) {
//                 return res.json({status: 'failed', mensaje: 'usuario no encontrado'})
//             }

//             bcrypt.compare(password, results.password).then((correctPassword) => {
//                 if(correctPassword) {
//                     const {id} = results;
//                     return res.json({status: 'success', mensaje: 'usuario encontrado', results: {id}})
//                 } else {
//                     return res.json({mensaje: 'passowrd incorrecta'})
//                 }
//             })
//         }) .catch(error => {console.log(error)})}

// // -------------- FUNCIÓN READMYPERFILE PARA: TRAER DATOS DE MONGO (READ) PARA MI PERFIL - PETICIÓN GET

// exports.readMyProfile = async (req,res) => { 
//     try{
//         const profiles = await User.find();
//         res.json(profiles)
//     } catch (err) {
//         console.error('Error: ' + err.stack)
//     }
// }

 