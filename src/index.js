const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')

//setings
app.set('port', process.env.PORT || 4000);


app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var rurasMiddelware = require('./middleware/loginMiddleware');
app.use((error, req, res, next) => {
    res.status("400").json({
        status: 'error',
        message: error
    })
})

//routes usuario
app.use('/api/register', require('./app/users/routes/register'));
app.use('/api/login', require('./app/users/routes/login'));
app.use('/api/user', rurasMiddelware, require('./app/users/routes/user'));
app.use('/api/places', rurasMiddelware, require('./app/places/routes/places'));


//starting
app.listen(app.get('port'), () => {
    console.log('conectado por puerto',app.get('port'));
})