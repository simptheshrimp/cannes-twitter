// var express = require('express');
// var app = express();
// var Twitter = require('twitter');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var twit = require('twit');


app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    var config = require('./config/config');
    var t = new twit(config);
} else if (env === 'production'){
    var config = require('./config/config_prod');
    var t = new twit(config);
};

var stream = t.stream('statuses/filter', { track: 'cannes2017' })

stream.on('tweet', function (tweet) {
    io.emit('tweet', tweet);
})

app.get('/', function(req, res) {

    res.render('index', {
        title: 'Festival De Cannes',
        message: 'Festival De Cannes',
        port: app.get('port')
    });

});

server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
