window.addEventListener('load', function () {

    var socket = io.connect('/');

    socket.on('tweet', function (tweet) {
        // Get feed container
        var feedContainer = document.querySelector('.feed-live-container');

        // Create tweet container
        var tweetContainer = document.createElement('div');
        tweetContainer.className = 'tweet-live';

        // Add content
        var html = '<div class="tweet-live-header">';
            html += '<img class="tweet-live-header__icon" src="' + tweet.user.profile_image_url + '">';
            html += '</div>';

            html += '<div class="tweet-live-content">';
            html += '<span class="tweet-live-content__user"> ' + tweet.user.name + '</span>';
            html += '<p class="tweet-live-content__text">' + tweet.text + '</p>';
            html += '</div>';

        tweetContainer.innerHTML = html;
        feedContainer.insertBefore( tweetContainer, feedContainer.firstChild );
    });

});
