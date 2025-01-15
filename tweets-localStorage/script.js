const form = document.querySelector("#form");
const tweetList = document.querySelector("#tweets-list");

let tweets = [];

document.addEventListener('DOMContentLoaded', ()=>{
    tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    createHTML();
})

form.addEventListener("submit", e => {
    e.preventDefault();
    const tweet = document.querySelector("#tweet").value;
    if (tweet === ""){
        alert("Please enter a tweet");
        return;
    }
    const tweetObj = {
        id: Date.now(),
        tweet // tweet = tweet: tweet
    }
    tweets = [...tweets,tweetObj];
    console.log(tweets);
    createHTML();
    form.reset();
});

function createHTML(){
    clearAppendChild();
    if (tweets.length > 0){ // validation for unexecute when there's no something
        tweets.forEach(item => {
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.textContent = "X";
            btn.onclick = () => {
                deleteTweet(item.id);
            }
            li.innerText = item.tweet; // adding the text 
            li.appendChild(btn);
            tweetList.appendChild(li); // we need something that cleans the previous text
        });
    }
    toLocalStorage();
}

function deleteTweet(id){
    tweets = tweets.filter( tweet => tweet.id != id);
    createHTML();
}

function toLocalStorage(){
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

function clearAppendChild(){
    while(tweetList.firstChild){
        tweetList.removeChild(tweetList.firstChild);
    }
}
