    var http = require('http');
    var path = require ('path');
    var fs = require ('fs');
    http.createServer(function (req, res) {

    	var filePath = path.join(__dirname, 'public', 'sample.html');
    	console.log('%s %s', req.connection.remoteAddress, req.url);
    	var fileStream = fs.createReadStream(filePath);
    		fileStream.pipe(res);

    }).listen(3030);