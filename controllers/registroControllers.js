const {request,response} = require('express');
const {createUserWithEmailAndPassword} = require('firebase/auth');
const {auth} = require('../firebase/config');


const mostrarRegistro = (req = request, res = response, next)=>{


    res.render('registro')
}

const registroUsuario = async(req = request, res = response, next)=>{

    const {email,contraseña} = req.body;

    try {
        const usuarioCredencial = await createUserWithEmailAndPassword(
            auth,
            email,
            contraseña
        )
        res.redirect('salas')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    mostrarRegistro,
    registroUsuario
}