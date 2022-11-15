const {request,response} = require('express');


const paginaInicio = (req = request, res = response, next)=>{
    res.render('home')
}

module.exports = {
    paginaInicio
}