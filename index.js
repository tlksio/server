var http = require('http');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxy();
require('http').createServer(function(req, res) {
    var host = req.headers.host;
    var url;

    if ((host === "tlks.io") ||  (host === "www.tlks.io")) {
        url = 'http://localhost:9001';
    } else if (host === "api.tlks.io") {
        url = 'http://localhost:9002';
    } else {
        console.log(host);
    }
    proxy.web(req, res, {
        target: url
    });
}).listen(80);
