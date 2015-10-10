var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var body = require('body-parser');

app.use(morgan('dev'));
app.use(body.urlencoded({ extended: true }));
app.use(body.json());
app.set('view engine', 'ejs');

//routing

app.use('/app',express.static(__dirname + '/app'));
app.use('/public',express.static(__dirname + '/public'));
app.use('/favicon.ico',express.static(__dirname + '/'));

require('./app/routes.js')(app);

app.listen(port);
console.log(" Server runing on port " + port);