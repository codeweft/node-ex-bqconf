var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

var stormpathMiddleware = stormpath.init(app, {
    apiKeyFile: './apiKey.properties',
    application: 'https://api.stormpath.com/v1/applications/5XpbhlcDieJmD6gGlDFuln',
    secretKey: '6SVFRGOOSAXJQ3OGC0VWOFR4F',
    expandCustomData: true,
    enableForgotPassword: true,
    enableConfirmPassword: false
});

app.use(stormpathMiddleware);

app.get('/', function(req, res) {
    res.render('home', {
        title: 'Welcome'
    });
});

app.listen(3000);
