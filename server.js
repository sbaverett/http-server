var http = require('http');
var path = require ('path');
var fs = require ('fs');

    	var filePath = path.join(__dirname, 'public', 'index.html');
    	console.log('%s %s', req.connection.remoteAddress, req.url);
    	var fileStream = fs.createReadStream(filePath);
    		fileStream.pipe(res);

http.createServer(function (request, response) {
	console.log('%s %s', request.connection.remoteAddress, request.url);


	var filePath = path.join(__dirname, 'public', request.url);
	var fileStream = fs.createReadStream(filePath);
	fileStream.pipe(response);

}).listen(3030);
