const {request,response} = require('express');
const mongoose = require('mongoose');
const Salas = require('../models/Salas')


const paginaSalas = async(req = request, res = response, next)=>{

    const salas = await Salas.find().lean();

    if(!salas) return next();


    res.render('salas', {
        salas: salas
    })
}

const crearSala = async(req = request, res = response, next)=>{
    const {titulo,autor,imagen} = req.body;

    const sala = new Salas({titulo,autor,imagen});

    try {
        await sala.save();
        res.redirect('salas')
    } catch (error) {
        console.log(error)
        return next();
    }

    

}

module.exports = {
    paginaSalas,
    crearSala
}