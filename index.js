var express = require('express');
var app = express();
var Twitter = require('twitter');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    var config = require('./config/config');
    var client = new Twitter(config);
} else if (env === 'production'){
    var config = require('./config/config_prod');
    var client = new Twitter(config);
};

app.get('/', function(req, res) {

    client.get('search/tweets', {q: 'cannes2017'}, function(error, tweets, response) {
        res.render('index', {
            title: 'Festival De Cannes',
            message: 'Festival De Cannes',
            tweets: tweets.statuses
        });

    });

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
