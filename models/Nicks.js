const {model,Schema} = require('mongoose');

const nickSchema = Schema({
    nombre:{
        type:String,
        required: true
    },
})

module.exports = model('Nick', nickSchema);