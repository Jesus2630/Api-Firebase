const {request,response} = require('express');
const {auth} = require('../firebase/config');
const {signInWithEmailAndPassword} = require('firebase/auth');



const mostrarLogin = (req = request, res = response, next)=>{
    res.render('login')
}

const ingresarUsuario = async(req = request, res = response, next)=>{
    const {email, contraseña} = req.body;

    try {
        const usuarioCredencial = await signInWithEmailAndPassword(
            auth,
            email,
            contraseña
        )
    res.redirect('chat');
    } catch (error) {
        console.log(error)
    }   
}   

module.exports = {
    mostrarLogin,
    ingresarUsuario
}