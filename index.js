var http = require('http');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxy();
require('http').createServer(function(req, res) {
    var url = "http://thereisnothinghere.io";

    var host = req.headers.host;

    if (host==="tlks.io") {
        url = 'http://localhost:9001';
    } else {
        url = 'http://localhost:9002';
    }
    proxy.web(req, res, {
        target: url
    });
}).listen(80);
