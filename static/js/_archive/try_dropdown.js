var dropdownButton = document.getElementById("dropdownButton");
var dropdownList = document.getElementById("dropdownList");

dropdownButton.onclick = function () {
  var display = dropdownList.style.display;
  dropdownList.style.display = display === "block" ? "none" : "block";
};

dropdownList.onclick = function (event) {
  event.preventDefault();
  var value = event.target.getAttribute("data-value");
  if (value) {
    dropdownButton.innerHTML = event.target.innerHTML;
    document.getElementById("countrycode").value = value;
  }
};

document.onclick = function (event) {
  if (
    event.target !== dropdownButton &&
    event.target.parentNode !== dropdownList
  ) {
    dropdownList.style.display = "none";
  }
};
