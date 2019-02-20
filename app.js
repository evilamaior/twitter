let tweetText = document.querySelector("#tweetText");
let tweetButton = document.querySelector("#tweetButton");
let newTweet = document.querySelector("#newTweet");
let counter = document.querySelector("#counter");
const maxTweetLength = 140;

tweetButton.addEventListener("click", addTweet);

function addTweet(event) {
    let paragraph = document.createElement("p");
    paragraph.textContent = tweetText.value + moment().startOf().fromNow();
    newTweet.appendChild(paragraph);
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


