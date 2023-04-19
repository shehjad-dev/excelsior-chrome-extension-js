fetch("https://icanhazdadjoke.com/slack")
    .then((data) => data.json())
    .then((jokeData) => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById("jokeElement");

        jokeElement.innerHTML = jokeText;
    });

const btn = document.querySelector("#changeFirstPBtn");

btn.addEventListener("click", () => {
    chrome.runtime.sendMessage("changePTag", function (response) {
        console.log(response);
    });
});

const explodeBtn = document.getElementById("explodeButton");

explodeBtn.addEventListener("click", () => {
    chrome.runtime.sendMessage("explode", function (response) {
        console.log(response);
    });
});

const makeRedBtn = document.getElementById("makeEveryBtnRed");

makeRedBtn.addEventListener("click", () => {
    chrome.runtime.sendMessage("makeRed", function (response) {
        console.log(response);
    });
});
