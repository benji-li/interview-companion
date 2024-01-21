document.addEventListener('DOMContentLoaded', function(){
    //on click of the button-3 object console.log a message
    document.getElementById("startaudio").addEventListener("click", function() {
        console.log("button-3 clicked");
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: 'startAudioProcessing'});
        })
    });
    document.getElementById("stopaudio").addEventListener("click", function() {
        console.log("button-3 clicked");
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: 'stopAudioProcessing'});
        })
    });
});
