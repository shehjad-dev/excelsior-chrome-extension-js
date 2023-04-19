chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        name: "Jack",
    });
});

let currentTab;
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    currentTab = tabs[0].id;
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        currentTab = tabs[0].id;
    });
});

chrome.runtime.onMessage.addListener(async function (
    request,
    sender,
    sendResponse
) {
    sendResponse({
        message: "manipulate the dom",
    });

    if (request === "changePTag") {
        chrome.scripting
            .executeScript({
                target: { tabId: currentTab },
                files: ["foreground.js"],
            })
            .then(() => {
                console.log("INJECTED THE FOREGROUND SCRIPT.");
            })
            .catch((err) => console.log(err));
    }

    if (request === "explode") {
        chrome.scripting
            .executeScript({
                target: { tabId: currentTab },
                files: ["anotherForeground.js"],
            })
            .then(() => {
                console.log("INJECTED ANOTHER FOREGROUND SCRIPT.");
            })
            .catch((err) => console.log(err));
    }

    if (request === "makeRed") {
        chrome.scripting
            .executeScript({
                target: { tabId: currentTab },
                files: ["makeRedForeground.js"],
            })
            .then(() => {
                console.log("INJECTED ANOTHER FOREGROUND SCRIPT.");
            })
            .catch((err) => console.log(err));
    }
});
