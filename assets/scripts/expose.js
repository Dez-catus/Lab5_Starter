// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
// TODO
const hornSelect = document.querySelector("#horn-select");
  const volumeSlider = document.querySelector("#volume");
  const playButton = document.querySelector("button");
  const image = document.querySelector("img");
  const audio = document.querySelector("audio");
  const volumeIcon = document.querySelector("#volume-controls img");

  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener("change", (event) => {
    const selected = event.target.value;

    if (selected === "air-horn") {
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } 
    else if (selected === "car-horn") {
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } 
    else if (selected === "party-horn") {
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    } 
    else {
      image.src = "assets/images/no-image.png";
      audio.src = "";
    }
  });

  volumeSlider.addEventListener("input", (event) => {
    const volume = event.target.value;

    audio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } 
    else if (volume < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } 
    else if (volume < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } 
    else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });


  playButton.addEventListener("click", () => {
    audio.play();

    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}