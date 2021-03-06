var request = require('request');

module.exports = function(location, callback) {
	var encodedLocation = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation +'&appid=2de143494c0b295cca9337e1e96b00e0&units=imperial';

	if(!location){
		return callback('No location provided!');
	}

	request({
	url: url,
	json: true
	}, function (error, response, body) {
		if (error){
			callback('unable to fetch the data!');
		}else {
			var w = JSON.stringify(body, null, 4);
			callback("It's " + body.main.temp + "F in " + body.name +"!");
		}
	});
}