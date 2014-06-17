var http = require('http');
var path = require ('path');
var fs = require ('fs');

http.createServer(function (request, response) {
	var filePath = path.join(__dirname, 'public', 'index.html');
	console.log('%s %s', request.connection.remoteAddress, request.url);
	var fileStream = fs.createReadStream(filePath);
	fileStream.pipe(response);

}).listen(3030);
