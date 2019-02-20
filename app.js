let tweetText = document.querySelector("#tweetText");

let tweetButton = document.querySelector("#tweetButton");

let tweetList = document.querySelector("#tweetList");

let counter = document.querySelector("#counter");

const maxTweetLength = 140;

tweetButton.addEventListener("click", addTweet);

function addTweet(event) {
    let listItem = document.createElement("li");
    listItem.textContent = tweetText.value;
    tweetList.appendChild(listItem);
    tweetText.value = "";
}

tweetText.addEventListener("keyup", startCounter)

function startCounter(event) {
    let counterValue = maxTweetLength - tweetText.value.length;
    counter.textContent = counterValue;
    if (counterValue === maxTweetLength) {
        tweetButton.setAttribute("disabled", "");
    }else {
        tweetButton.removeAttribute("disabled");
    }


}