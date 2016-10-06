var path = require("path");

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig    = require('./webpack.config');

var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');
var nodemailer = require('nodemailer');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//var emailSuggestion = require('./routes/emailSuggestions');
//app.use('/emailSuggestions', emailSuggestion);

app.get('/hello', function(req, res) {
  res.send('hello world');
});

var transporter = nodemailer.createTransport({ service: 'Gmail', auth: { user: 'babytipsdec2016@gmail.com', pass: 'tickle2016' } });

app.get('/emailSuggestions', function(req, res) {
  var html = req.query.html;

  console.log(html);

  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: '"Baby Tips" <babytipsdec2016@gmail.com>', // sender address
    to: 'vasu_mathi_l@yahoo.com, dhivyasethu@yahoo.com', // list of receivers
    subject: 'Baby Tips,', // Subject line
    text: 'Hello world ?', // plaintext body
    html: html // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });

  res.send('success');
});


var server = app.listen(8080, function () {
    var host = 'localhost';
    var port = server.address().port;

    console.log('React server listening at http://%s:%s', host, port);
});

var Cluster = require('./modules/cluster_support');
module.exports = new Cluster(app);

