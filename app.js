let tweetText = document.querySelector("#tweet-text");
let tweetButton = document.querySelector("#tweet-button");
let newTweet = document.querySelector("#new-tweet");
let counter = document.querySelector("#counter");
const maxTweetLength = 140;

tweetButton.addEventListener("click", () => {
    reset()
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
            <hr class="line">
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
        counter.className = "blue counter-style";
    } else if (counterValue <= 20 && counterValue > 10) {
        counter.className = "yellow counter-style";
    } else if (counterValue <= 10) {
        counter.className = "red counter-style";
        if(counterValue < 0){
            tweetButton.disabled = true;
        }
    }
}

function resizedTweetText() {
    tweetText.style.height = '0px';
    tweetText.style.height = tweetText.scrollHeight + 'px';
   }

function reset() {
    counter.innerHTML = maxTweetLength;
    counter.className = "blue counter-style";
    tweetButton.disabled = true;
    tweetText.style.height = "10vh";
}

