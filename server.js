var http = require('http');
var path = require ('path');
var fs = require ('fs');

http.createServer(function (request, response) {
	console.log('%s %s', request.connection.remoteAddress, request.url);

	var filePath = path.join(__dirname, 'public', request.url);
	var fileStream = fs.createReadStream(filePath);
	fileStream.pipe(response);

}).listen(3030);
