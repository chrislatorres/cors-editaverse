var fs = require('fs');

var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 443;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    httpsOptions: {
        key: fs.readFileSync('./privkey.pem'),
        cert: fs.readFileSync('./fullchain.pem')
    },
    originWhitelist: ["https://*.editaverse.com", "https://editaverse.com"],
//    originWhitelist: [], // Allow all origins
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
