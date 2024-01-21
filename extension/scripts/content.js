window.onload = () => {
// Fetch and inject HTML

const HTTP = "http://localhost:8000/chat";

fetch(chrome.runtime.getURL('client/client.html'))
    .then(r => r.text())
    .then(html => {
        // Create a new div and insert the HTML
        let div = document.createElement('div');
        div.innerHTML = html;
        div.style.position = "fixed";
        div.style.top = "60%";
        div.style.left = "18%";
        div.style.zIndex = "1000";
        document.body.appendChild(div);
    });
// Fetch and inject CSS
fetch(chrome.runtime.getURL('client/client.css'))
    .then(r => r.text())
    .then(css => {
        // Create a new style element and insert the CSS
        let style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    });
console.log('Injected HTML content into the active tab.');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'getElementByjsname') {
        const element = document.querySelector(`[jsname="${request.jsName}"]`);
        if (element) {
            const clientBody = document.getElementById('bodyText');
            if (clientBody) {
                //clientBody.innerHTML += "<br><strong>"+element.textContent+"</strong>";
                //clientBody.scrollTop = clientBody.scrollHeight;

                //console.log('hi');

                    // Send a POST request to the localhost address
                fetch(HTTP, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        text: element.textContent
                    })
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Request", data.text)
                    clientBody.innerHTML += "<br><br><strong>"+data.text+"</strong>";
                    clientBody.scrollTop = clientBody.scrollHeight;
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            }

        }
        console.log(element.textContent);
    }
});
    
}