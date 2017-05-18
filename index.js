var express = require('express');
var app = express();
var Twitter = require('twitter');

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'pug');

// views is directory for all template files
var client = new Twitter({
    consumer_key: 'fhtnTOSL0s4hzf8nApG1jreWV',
    consumer_secret: 'aeLFEQu6zuxqePHFfMbQGz7p1qkInYnCJlmLrwHIa92BGmhs1u',
    access_token_key: '864443637865885696-m0lCyYKvP17fqX0E79LWCd1Z1jtm051',
    access_token_secret: 'E9HaMxIf6PIR2OwT4ZF9fxweEwZmZiw1XwqvpRtMNykMM'
});

app.get('/', function(req, res) {

    client.get('search/tweets', {q: 'cannes2017'}, function(error, tweets, response) {
        res.render('index', {
            title: 'Hey',
            message: 'Hello there!',
            tweets: tweets.statuses
        });

    });

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
