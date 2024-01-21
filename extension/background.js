// background.js
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({ text: 'OFF' });
});

const meet = 'https://meet.google.com/';

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {

  if (tab.url.startsWith(meet)) {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState
    });
    console.log(nextState);
    if (nextState === 'ON') {
      console.log("turning");
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: "open"}, function(response) {});  
    });    }
    else if (nextState === 'OFF') {
      console.log("off");
    }
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "openNewTab") {
      chrome.tabs.create({ url: request.url });
  }
});
