let timeout = 3.5;
let blurBoxTop = document.getElementById("blurBoxTop");
let class_type_tag = document.getElementById("middleImage");

function addHideControls() {
  blurBoxTop.classList.add("hideControls");
  class_type_tag.classList.add("hideControls");
}

function removeHideControls() {
  blurBoxTop.classList.remove("hideControls");
  class_type_tag.classList.remove("hideControls");
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

var buttons = document.getElementsByClassName("function-button");
var panels = document.getElementsByClassName("function-panel");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // Hide all panels
    for (var j = 0; j < panels.length; j++) {
      panels[j].style.display = "none";
    }

    // Show the clicked panel
    var panelId = this.id.replace("Button", "Panel");
    var panel = document.getElementById(panelId);
    panel.style.display = "block";
  });
}
