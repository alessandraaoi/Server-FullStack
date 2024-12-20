const mongoose = require('mongoose')

const db = async () => {
    await mongoose.connect(process.env.DB_CONNECTION || '')
    .catch(error => {console.log('Error Mongo' + error)})
}

const connection = mongoose.connection;

connection.once('open', () => console.log('Connected to Mongo'))
connection.on('error', (err) => console.log('Error to connect: ' + (err)))

module.exports = db;