window.onload = () => {
// Fetch and inject HTML
const HTTP = "http://localhost:8000/chat";
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'open') {

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

        const el = document.createElement("input")
        el.setAttribute("type", "button");
        el.setAttribute("value", "⚙️");
        el.style.fontFamily = 'Open Sans, sans-serif';
        el.style.fontWeight = "bold";
        el.style.fontSize = "20px";
        el.style.position = "fixed";
        el.style.color = "white";
        el.style.backgroundColor = "#3c4043";
        el.style.border = "none";
        el.style.bottom = '20px';
        el.style.left = "31.8%";
        el.style.width = "40px";
        el.style.height = "40px";
        el.style.cursor = 'pointer';
        el.style.borderRadius = '20px';
        el.style.zIndex = "2000";
        document.body.appendChild(el)

        el.addEventListener("click", (event) => {
            console.log(event.target.checked);
            chrome.runtime.sendMessage({action: "openNewTab", url: "https://localhost:3000/"});
        })

        const grab = document.createElement("input")
        grab.setAttribute("type", "button");
        grab.setAttribute("value", "🧠");
        grab.style.fontFamily = 'Open Sans, sans-serif';
        grab.style.fontSize = "20px";
        grab.style.fontWeight="bold";
        grab.style.position = "fixed";
        grab.style.color = "white";
        grab.style.backgroundColor = "#3c4043";
        grab.style.border = "none";
        grab.style.bottom = '20px';
        grab.style.left = "28.3%";
        grab.style.width = "40px";
        grab.style.height = "40px";
        grab.style.cursor = 'pointer';
        grab.style.borderRadius = '20px';
        grab.style.zIndex = "2000";
        document.body.appendChild(grab)

        grab.addEventListener("click", (event) => {
            const element = document.querySelector(`[jsname="${"tgaKEf"}"]`);
            if (element) {
                const clientBody = document.getElementById('bodyText');
                if (clientBody) {
                    const title = document.getElementById('title');
                    title.innerHTML = "🤔 Interview Buddy";
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
                    .then(
                        clientBody.innerHTML = element.textContent+"<br><br><strong>"+ clientBody.innerHTML
                    )
                    .then(response => response.json())
                    .then(data => {
                        console.log("Request", data.text)
                        clientBody.innerHTML = element.textContent+"<br><br><strong>"+data.text+"</strong><br><br>"+ clientBody.innerHTML;
                        clientBody.scrollTop = clientBody.scrollHeight;
                        title.innerHTML = "🤓 Interview Buddy";
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
                }

            }
            console.log(element.textContent);
        });
    }
    console.log('Injected HTML content into the active tab.');
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'getElementByjsname') {
        const element = document.querySelector(`[jsname="${request.jsName}"]`);
        if (element) {
            const clientBody = document.getElementById('bodyText');
            if (clientBody) {
                const title = document.getElementById('title');
                title.innerHTML = "🤔 Interview Buddy";
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
                .then(
                    clientBody.innerHTML = element.textContent+"<br><br><strong>"+ clientBody.innerHTML
                )
                .then(response => response.json())
                .then(data => {
                    console.log("Request", data.text)
                    clientBody.innerHTML = element.textContent+"<br><br><strong>"+data.text+"</strong><br><br>"+ clientBody.innerHTML;
                    clientBody.scrollTop = clientBody.scrollHeight;
                    title.innerHTML = "🤓 Interview Buddy";
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