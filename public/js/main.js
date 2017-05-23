var socket = io.connect('/');

socket.on('tweet', function (tweet) {
    // Get feed container
    var feedContainer = document.querySelector('.feed-live-container');

    // Create tweet container
    var tweetContainer = document.createElement('div');
    tweetContainer.className = 'tweet-live';

    // Add content
    var html = '<div class="tweet-live-icon">';
        html += '<img class="tweet-live-header__icon" src="' + tweet.user.profile_image_url + '">';
        html += '</div>';
        html += '<div class="tweet-live-content">';
        html += '<span class="tweet-live-header__user">' + tweet.user.name + '</span>';
        // If tweet has image
    if (tweet.entities.media && tweet.entities.media.length > 0) {
        html += '<img class="tweet-content__img" src="' + tweet.entities.media[0].media_url + ':thumb">';
    }
        html += '<p class="tweet-content__text">' + tweet.text + '</p>';
        html += '</div>';

    tweetContainer.innerHTML = html;
    feedContainer.prepend(tweetContainer);

    console.log(tweet.text);
});
