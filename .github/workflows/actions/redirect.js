const http = require('http');

module.exports = function(context) {
  http.createServer(function (req, res) {
    res.writeHead(301, {'Location': 'https://example.com'});
    res.end();
  }).listen(context.port);
};