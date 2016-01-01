var request = require('request');
var url = 'http://ipinfo.io';

module.exports = function (callback) {
	request({
	url: url,
	json: true
	}, function (error, response, body) {
		if (error){
			callback('unable to fetch the data!');
		}else {
			var w = JSON.stringify(body, null, 4);
			callback(body);
			//"It's" + w.main.temp + "in" + w.name
		}
	});
}