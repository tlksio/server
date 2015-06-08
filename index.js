var http = require('http');
var httpProxy = require('http-proxy');

//
// Just set up your options...
//
var options = {
    hostnameOnly: true,
    router: {
        'tlks.io': '127.0.0.1:9000',
        'api.tlks.io': '127.0.0.1:9001'
    }
};

//
// ...and then pass them in when you create your proxy.
//
var proxyServer = httpProxy.createServer(options).listen(80);
