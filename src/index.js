const express = require('express');
const morgan = require('morgan');

// Inicializaciones
const app = express();

// Settings
app.set('title', 'Favorite links');
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));

// Global variables

// Routes

// Public

// Starting the server
app.listen(app.get('port'), () => {
    console.log(app.get('title'), 'listening at the port', app.get('port'))
});