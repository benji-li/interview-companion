// background.js
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({ text: 'OFF' });
});

const meet = 'https://meet.google.com/';
const zoom = 'https://zoom.us/';

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(meet) || tab.url.startsWith(zoom)) {
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
    }
    else if (nextState === 'OFF') {
      console.log("off");
    }
  }
});

// set up audio stuff
console.log('hello')

chrome.runtime.onMessage.addListener(function(message) {
    console.log("message received");
    if (message.action == 'startAudioProcessing') {
        console.log("yepp");
        startAudioProcessing();
    }
    if (message.action == 'stopAudioProcessing') {
        console.log("nopp");
        stopAudioProcessing();
    }
});
let audioContext, analyser, source, stream;

async function startAudioProcessing() {
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();

    // Connect the AnalyserNode to the audioContext
    analyser.connect(audioContext.destination);

    // Capture audio stream from the active tab
    stream = await new Promise((resolve, reject) => {
      chrome.tabCapture.capture({ audio: true, video: false }, function (capturedStream) {
        if (chrome.runtime.lastError) {
          console.error('Error capturing tab: ', chrome.runtime.lastError);
          reject(chrome.runtime.lastError);
        } else {
          resolve(capturedStream);
        }
      });
    });

    source = audioContext.createMediaStreamSource(stream);

    // Connect the source to the analyser
    source.connect(analyser);

    // Call processAudioData every second
    setInterval(processAudioData, 1000);
  } catch (error) {
    console.error('Error starting audio processing:', error);
  }
}

function processAudioData() {
  const dataArray = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(dataArray);

  // Process the audio data and save it into your object
  const audioObject = {
    timestamp: Date.now(),
    audioData: [...dataArray]
  };

  console.log(audioObject);
}

function stopAudioProcessing() {
  if (source) {
    source.disconnect();
  }
  if (stream) {
    let tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
  }
}
