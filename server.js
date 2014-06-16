    var http = require('http');
    var path = require ('path');
    var fs = require ('fs');
    http.createServer(function (req, res) {
    	var file = path.join(__dirname, 'sample.html');
    	console.log('%s %s', req.connection.remoteAddress, req.url);
    	var fileStream = fs.createReadStream(file);
    		fileStream.pipe(res);

    }).listen(3030);