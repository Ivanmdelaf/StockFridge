const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mainRoutes = require('../routes/mainroutes');

module.exports = (app)=>{
    //Setting app
    app.set('port', process.env.PORT || 4000);

    require('../database/config');
    console.log(process.env.NODE_ENV)
    //Views
    app.set('views',path.join(__dirname,'../views'));
    app.set('view engine','.hbs');
    app.engine('hbs', exphbs({
        extname: '.hbs',
        defaultLayout: 'main',
        partialsDir: path.join(__dirname,app.get('views')+'partials')
    }))

    //Middleware
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(express.static(path.join(__dirname,'../public')));

    //Routes
    mainRoutes(app);

    //Listening Server
    app.listen(app.get('port'),()=>{
        console.log(`Server running on port ${app.get('port')}`);
    })
}