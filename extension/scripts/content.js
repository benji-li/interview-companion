// Fetch and inject HTML

fetch(chrome.runtime.getURL('popup/popup.html'))
    .then(r => r.text())
    .then(html => {
        // Create a new div and insert the HTML
        let div = document.createElement('div');
        div.innerHTML = html;
        div.style.position = "fixed";
        div.style.top = "5%";
        div.style.left = "60%";
        //div.style.transform = "translate(-50%, -50%)";
        div.style.zIndex = "1000";
        document.body.appendChild(div);
    });
// Fetch and inject CSS
fetch(chrome.runtime.getURL('popup/popup.css'))
    .then(r => r.text())
    .then(css => {
        // Create a new style element and insert the CSS
        let style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'hideElement') {
        // Hide the HTML element with a specific ID
        const elementToHide = document.getElementById(message.elementId);
        if (elementToHide) {
        elementToHide.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the image element by its ID
    var dynamicImage = document.getElementById('unsplash');
  
    // Set the source attribute of the image using chrome.runtime.getURL
    dynamicImage.src = chrome.runtime.getURL('img/unsplash-5ziaatxttok.png');
  });

/*
const htmlToInject = '<div style="background: yellow; padding: 20px;">Injected HTML Content</div>';

// Create a temporary container element
const container = document.createElement('div');

// Set the container's innerHTML to the HTML string
container.innerHTML = htmlToInject;
container.style.position = "fixed";
container.style.top = "50%";
container.style.left = "50%";
container.style.transform = "translate(-50%, -50%)";
container.style.zIndex = "1000";

// Append the content to the document body
document.body.appendChild(container);
*/
console.log('Injected HTML content into the active tab.');
