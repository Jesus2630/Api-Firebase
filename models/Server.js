const express = require('express');
const routes = require('../routes/');
const {engine} = require('express-handlebars');
const connectDb = require('../database/db')
require('dotenv').config();

class Server{
    constructor(){
        this.app = express();
        this.PORT  = process.env.PORT;

        this.connectDb();
        this.engine();
        this.middlewares();
        this.routes();
    }

    async connectDb(){
        await connectDb()
    }

    engine(){
        this.app.engine('.hbs',
            engine({
                extname: '.hbs',
                defaultLayout: 'layout'
            })
        )
        this.app.set('view engine', '.hbs')
    }

    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(express.json())
    }
    routes(){
        this.app.use('/', routes)
    }
    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`Servidor iniciado en el puerto: ${this.PORT}`)
        })
    }
}

module.exports = Server;