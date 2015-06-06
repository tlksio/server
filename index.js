var vhostProxy = require('vhost-proxy');

var server = vhostProxy.createProxy({
    vhosts: {
        'tlks.io': '127.0.0.1:5001',
        'api.tlks.io': '127.0.0.1:5002'
    }
}).listen(80);
