var socket = io.connect('/');

socket.on('tweet', function (tweet) {
    console.log(tweet.text);
});
