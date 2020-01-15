const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose }= require('./database');
const cors = require('cors');

//Settings (configuraciones básicas el servidor)
app.set('port', process.env.PORT || 3000);

//Middlewares (librerias)
app.use(morgan('dev'));  //morgan de información acerca de las consultas a la página
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'})); //cors sirve para habilitar la conexión con angular

//Routes
app.use('/api/teachers', require('./routers/teachers.routers'));

//Starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
});