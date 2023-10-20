var video = document.getElementById("videoBG");
var playPauseImage = document.getElementById("playPauseImage");

function formatTime(timeInSeconds) {
  var minutes = Math.floor(timeInSeconds / 60);
  var seconds = Math.floor(timeInSeconds - minutes * 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
}

var video = document.getElementById("videoBG");
var playPauseImage = document.getElementById("playPauseImage");
var currentTimeSpan = document.getElementById("currentTime");
var remainingTimeSpan = document.getElementById("remainingTime");

function playPause() {
  if (video.paused) {
    video.play();
    playPauseImage.src =
      "{% static '/images/watch_content/pause_button_logo.png'%}";
  } else {
    video.pause();
    playPauseImage.src =
      "{% static '/images/watch_content/play_button_logo.png'%}";
  }
}

function rewind() {
  video.currentTime -= 10;
}

function forward() {
  video.currentTime += 10;
}

var progressBarContainer = document.getElementById("progressBarContainer");
var progressBar = document.getElementById("progressBar");
var progressThumb = document.getElementById("progressThumb");

video.ontimeupdate = function () {
  var progress = (video.currentTime / video.duration) * 100;
  progressBar.style.width = progress + "%";
  progressThumb.style.left = progressBar.style.width;

  currentTimeSpan.textContent = formatTime(video.currentTime);
  remainingTimeSpan.textContent =
    "-" + formatTime(video.duration - video.currentTime);
};

// Jump to different part of the video when the progress bar is clicked
progressBarContainer.onclick = function (e) {
  var rect = progressBarContainer.getBoundingClientRect();
  var clickPosition = (e.clientX - rect.left) / rect.width;
  video.currentTime = clickPosition * video.duration;
};

var dragging = false;

progressBarContainer.onmousedown = function () {
  dragging = true;
};

progressBarContainer.onmouseup = function () {
  dragging = false;
};

progressBarContainer.onmousemove = function (e) {
  if (dragging) {
    var rect = progressBarContainer.getBoundingClientRect();
    var dragPosition = (e.clientX - rect.left) / rect.width;
    video.currentTime = dragPosition * video.duration;
  }
};

// Add these two lines to handle the case where the mouse is released outside of the progress bar
document.onmouseup = function () {
  dragging = false;
};
let timeout = 3.5;
let blurBoxTop = document.getElementById("blurBoxTop");
let class_type_tag = document.getElementById("middleImage");
let blurBoxBottom = document.getElementById("blurBoxBottom");
let rewind_button = document.getElementById("rewindButton");
let play_button = document.getElementById("playPauseButton");
let fastforward_button = document.getElementById("fastforwardButton");

console.log(buttonContainer, blurBoxBottom, blurBoxTop);

function addHideControls() {
  blurBoxTop.classList.add("hideControls");
  blurBoxBottom.classList.add("hideControls");
  class_type_tag.classList.add("hideControls");
  rewind_button.classList.add("hideControls");
  play_button.classList.add("hideControls");
  fastforward_button.classList.add("hideControls");
}

function removeHideControls() {
  blurBoxTop.classList.remove("hideControls");
  blurBoxBottom.classList.remove("hideControls");
  class_type_tag.classList.remove("hideControls");
  buttonContainer.classList.remove("hideControls");
  rewind_button.classList.remove("hideControls");
  play_button.classList.remove("hideControls");
  fastforward_button.classList.remove("hideControls");
}

// Initially, we start with visible controls
removeHideControls();

document.addEventListener("mousemove", function () {
  // Reset the cursor and the controls to visible
  document.body.classList.remove("hideCursor");
  removeHideControls();

  // Clear the existing timeout
  clearTimeout(timeout);

  // Set a new timeout
  timeout = setTimeout(function () {
    // After 5 seconds of no mouse movement, hide the cursor and the controls
    document.body.classList.add("hideCursor");
    addHideControls();
  }, 5000);
});

var videoBackground = document.getElementById("videoBG");
var videoToggle = document.getElementById("videoToggle");

videoToggle.addEventListener("click", function () {
  if (videoBackground.style.objectFit !== "contain") {
    videoBackground.style.objectFit =
      "contain"; /* Maintain original aspect ratio */
  } else {
    videoBackground.style.objectFit =
      "cover"; /* Fill screen, maintain aspect ratio */
  }
});

var outerContainer = document.getElementById("outerContainer"); // This is the new container
var fullscreenButton = document.getElementById("fullscreenButton");

fullscreenButton.addEventListener("click", function () {
  if (outerContainer.requestFullscreen) {
    outerContainer.requestFullscreen();
  } else if (outerContainer.mozRequestFullScreen) {
    // Firefox
    outerContainer.mozRequestFullScreen();
  } else if (outerContainer.webkitRequestFullscreen) {
    // Chrome, Safari and Opera
    outerContainer.webkitRequestFullscreen();
  } else if (outerContainer.msRequestFullscreen) {
    // IE/Edge
    outerContainer.msRequestFullscreen();
  }
});
