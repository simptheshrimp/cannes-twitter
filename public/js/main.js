var socket = io.connect('/');

socket.on('tweet', function (tweet) {
    // Get feed container
    var feedContainer = document.querySelector('.feed');

    // Create tweet container
    var tweetContainer = document.createElement('div');
    tweetContainer.className = 'tweet';

    // Add content
    var html = '<div class="tweet-user">';
        html += '<img class="tweet-user__img" src="' + tweet.user.profile_image_url + '">';
        html += '<span class="tweet-user__account">' + tweet.user.name + '</span>';
        html += '</div>';
        html += '<div class="tweet-content">';
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
