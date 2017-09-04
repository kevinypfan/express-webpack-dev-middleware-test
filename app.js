var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var history = require('connect-history-api-fallback')
var fallback = require('express-history-api-fallback')

var app = express();
var port = 8080;
var compiler = webpack(webpackConfig);

//開發使用
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: webpackConfig.output.publicPath,
//     noInfo: true,
//     stats: {
//         colors: true
//     }
// }));
// app.use(webpackHotMiddleware(compiler));

app.get('/api', (req, res) => {
  res.send('aisndi')
})

//自製使用
// app.get('*', function(req, res) {
//     var body = '<!doctype html>' +
//         '<html lang="en">'+
//         '<head><meta charset="utf-8"></head>' +
//         '<body>' +'<div id="app"></div>'+
//         '<script src="build.js"></script>'+
//         '</body>'+
//         '</html>';
//
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.write(body);
//     res.end();
// });

//上線使用
app.use(express.static(__dirname))
app.use(fallback('index.html', { root: __dirname }))



app.listen(port, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info('==> ?  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
    }
});
