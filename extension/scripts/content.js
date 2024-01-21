window.onload = () => {
// Fetch and inject HTML
/*
fetch(chrome.runtime.getURL('popup/popup.html'))
    .then(r => r.text())
    .then(html => {
        // Create a new div and insert the HTML
        let div = document.createElement('div');
        div.innerHTML = html;
        div.style.position = "fixed";
        div.style.top = "5%";
        div.style.left = "60%";
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
console.log('Injected HTML content into the active tab.');
*/

// set up audio stuff
console.log('hello')
chrome.runtime.onMessage.addListener(function(message) {
    console.log("message received");
    if (message.action == 'startAudioProcessing') {
        console.log("yepp");
        state = 1;
        startAudioProcessing();
    }
    if (message.action == 'stopAudioProcessing') {
        console.log("nopp");
        state = 0;
    }
});

async function startAudioProcessing() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
  
    // Connect the AnalyserNode to the audioContext
    analyser.connect(audioContext.destination);
    
    console.log("connected!");

    // Capture audio stream from the active tab
    try {
      //const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const source = audioContext.createMediaStreamSource(stream);
  
      // Connect the source to the analyser
      source.connect(analyser);
  
      function processAudioData() {
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(dataArray);
  
        // Process the audio data and save it into your object
        const audioObject = {
          timestamp: Date.now(),
          audioData: [...dataArray]
        };
  
        // Do something with the audioObject, e.g., send it to a server
        console.log(audioObject);
  
        // Repeat the process
        requestAnimationFrame(processAudioData);
      }
      // Start the audio processing loop
      processAudioData();
    } catch (error) {
      console.error('Error accessing audio:', error);
    }
  }
  
}