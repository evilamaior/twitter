let tweetText = document.querySelector("#tweet-text");
let tweetButton = document.querySelector("#tweet-button");
let newTweet = document.querySelector("#new-tweet");
let counter = document.querySelector("#counter");
const maxTweetLength = 140;

tweetButton.addEventListener("click", () => {
    tweetButton.disabled = true;
    addTweet()});

tweetText.addEventListener("keyup", () => {
    tweetButton.disabled = false;
    startCounter();
    resizedTweetText();
});

function addTweet(event) {
    let hour = moment().startOf().fromNow();
    newTweet.innerHTML += twitterTemplate(hour, tweetText.value);
    tweetText.value = "";
}

function twitterTemplate(hour, tweet) {
    return `
        <div class="tweet">
            <div class="info-tweet">
                <img class="aquijuz" src="https://pbs.twimg.com/profile_images/928629694467051521/VrMwtDK0_400x400.jpg">
                <h1>@aquijuz</h1>
             <span>${hour}</span>
            </div>
            <p>${tweet}</p>
        </div>`;
}

function startCounter() {
    let counterValue = maxTweetLength - tweetText.value.length;
    counter.textContent = counterValue;
    counterStyle(counterValue);
}

function counterStyle(counterValue) {
    if (counterValue <= maxTweetLength && counterValue > 20) {
        counter.classList.add("class", "blue");
    } else if (counterValue <= 20 && counterValue > 10) {
        counter.classList.add("class", "yellow");
    } else if (counterValue <= 10) {
        counter.classList.add("class", "red");
        if(counterValue < 0){
            tweetButton.disabled = true;
        }
    }
}

function resizedTweetText() {
    tweetText.style.height = '0px';
    tweetText.style.height = tweetText.scrollHeight + 'px';
   }

