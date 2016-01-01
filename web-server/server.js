var express = require('express');
var app = express();
var middleware = require('./middleware');
var port = 3000;


app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication,  function (req, res) {
	res.send('About us!');
});


app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

app.listen(port, function() {
	console.log('Express server : ' + port + ' started!');
});  // for registering the port number