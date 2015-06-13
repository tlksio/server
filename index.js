var fs = require('fs');
var FileStreamRotator = require('file-stream-rotator');
var http = require('http');
var finalhandler = require('finalhandler');
var morgan = require('morgan');
var httpProxy = require('http-proxy');

var accessLogStream = FileStreamRotator.getStream({
    filename: __dirname + '/log/access.log',
    frequency: 'daily',
    verbose: false
});
var logger = morgan('combined', {
    stream: accessLogStream
});

var proxy = httpProxy.createProxy();

http.createServer(function(req, res) {
    var done = finalhandler(req, res);
    logger(req, res, function(err) {
        var host = req.headers.host;
        var url;
        switch (host) {
            case "tlks.io":
            case "www.tlks.io":
                url = 'http://localhost:9001';
                proxy.web(req, res, {
                    target: url
                });
                break;
            case "api.tlks.io":
                url = 'http://localhost:9002';
                proxy.web(req, res, {
                    target: url
                });
                break;
            default:
                console.log("ERROR: not allowed host", host);
                break;
        }
    });
}).listen(80);
