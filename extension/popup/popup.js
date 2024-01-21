document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("grab").addEventListener("click", function() {
        console.log("grab clicked");
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            //'iTTPOb VbkSUe'
            chrome.tabs.sendMessage(tabs[0].id, {action: 'getElementByClassName', className: 'tgaKEf'});
        });
    });
});
