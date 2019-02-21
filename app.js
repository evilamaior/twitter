let tweetText = document.querySelector("#tweetText");
let tweetButton = document.querySelector("#tweetButton");
let newTweet = document.querySelector("#newTweet");
let counter = document.querySelector("#counter");
const maxTweetLength = 140;

tweetButton.addEventListener("click", addTweet);

function addTweet(event) {
    let hour = moment().startOf().fromNow();
    let printTweet = `
        <div class="tweet">
        <div class="info-tweet">
        <img class="aquijuz" src="https://pbs.twimg.com/profile_images/928629694467051521/VrMwtDK0_400x400.jpg">
        <h1>@aquijuz</h1>
        <span>${hour}</span>
        </div>
        <p>${tweetText.value}</p>
        </div>
    `;
    newTweet.innerHTML += printTweet;

   tweetText.value = "";
}

tweetText.addEventListener("keyup", onTextChange);

function disabledButton() {
    let counterValue = maxTweetLength - tweetText.value.length;
    counter.textContent = counterValue;
    if (counterValue === maxTweetLength || counterValue < 0) {
        tweetButton.setAttribute("disabled", "");
    } 
    else {
        tweetButton.removeAttribute("disabled");
    }
}

function startCounter() {
    if (tweetText.value.length > 130) {
        counter.setAttribute("class", "red");
    } else if (tweetText.value.length > 120) {
        counter.setAttribute("class", "yellow");
    } else {
        counter.setAttribute("class", "blue");
    }
}

function resizedTweetText() {
    if(tweetText.scrollHeight > tweetText.offsetHeight) {
        tweetText.rows += 1;
    } 
}

function onTextChange() {
    startCounter()
    disabledButton()
    resizedTweetText()
}


