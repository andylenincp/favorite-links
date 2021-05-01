const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// Inicializaciones
const app = express();

// Settings
app.set('title', 'Favorite links');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 4000);
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// Global variables
app.use((req, res, next) => {
    next();
});

// Routes
app.use(require('./routes'));

// Public

// Starting the server
app.listen(app.get('port'), () => {
    console.log(app.get('title'), 'listening at the port', app.get('port'))
});