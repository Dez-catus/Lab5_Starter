// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const textArea = document.querySelector("#text-to-speak");
  const voiceSelect = document.querySelector("#voice-select");
  const speakButton = document.querySelector("button");
  const face = document.querySelector("img");
  let voices = [];
  const synth = window.speechSynthesis;

  function loadVoices() {
  const voices = speechSynthesis.getVoices();

  if (!voices.length) return; 

  voiceSelect.innerHTML = '<option disabled selected>Select Voice:</option>';

  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}
speechSynthesis.addEventListener("voiceschanged", loadVoices);


loadVoices();

  speakButton.addEventListener("click", () => {
    const text = textArea.value;

    if (!text) return;

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    const selectedIndex = voiceSelect.value;
    if (selectedIndex !== "select") {
      utterance.voice = voices[selectedIndex];
    }

    utterance.onstart = () => {
      face.src = "assets/images/smiling-open.png";
    };

    utterance.onend = () => {
      face.src = "assets/images/smiling.png";
    };

    speechSynthesis.speak(utterance);
  });
}