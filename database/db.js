const mongoose = require('mongoose');

const connectDb = ()=>{
    try {
        mongoose.connect("mongodb+srv://jesus2630:6IVEwCHFdtwLPzbl@cluster0.cth9r9b.mongodb.net/mongoej")
        console.log('Base de datos conectada correctamente 🐱‍👤')
    } catch (error) {
        console.log(error)  
    }
}


module.exports = connectDb;

