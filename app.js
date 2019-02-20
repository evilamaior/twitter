let tweetText = document.querySelector("#tweetText");

let tweetButton = document.querySelector("#tweetButton");

let tweetList = document.querySelector("#tweetList");

tweetButton.addEventListener("click", addTweet);

function addTweet(event) {
    let listItem = document.createElement("li");
    listItem.textContent = tweetText.value;
    tweetList.appendChild(listItem);
    tweetText.value = "";
}
