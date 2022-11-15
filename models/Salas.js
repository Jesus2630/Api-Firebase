const {model,Schema} = require('mongoose');

const salasSchema = Schema({
    titulo:{
        type:String,
        required: true
    },
    autor:{
        type: String,
        required: true
    },
    imagen:{
        type:String
    },
    estado:{
        type: Boolean,
        default: false
    }
})

module.exports = model('Salas', salasSchema);