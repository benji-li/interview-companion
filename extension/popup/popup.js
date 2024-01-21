document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("grab").addEventListener("click", function() {
        executeGrab();
    });
});

function executeGrab() {
    console.log("grab clicked");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'getElementByjsname', jsName: 'tgaKEf'});
    });
}

