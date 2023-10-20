document.getElementById("back-btn").addEventListener("click", function () {
  // Determine the current visible form
  let currentForm = "";
  if (document.getElementById("form1").style.display === "block") {
    currentForm = "form1";
  } else if (document.getElementById("form2").style.display === "block") {
    currentForm = "form2";
  } else if (document.getElementById("form3").style.display === "block") {
    currentForm = "form3";
  }

  // Determine the previous form and hide the current form
  let prevForm = "";
  if (currentForm === "form2") {
    hideForm2showForm1();
    prevForm = "form1";
  } else if (currentForm === "form3") {
    hideForm3showForm2();
    prevForm = "form2";
  }
});

function hideForm1showForm2() {
  document.getElementById("form1").style.display = "none";
  document.getElementById("form2").style.display = "block";
  document.getElementById("back-btn").style.display = "block";
}

function hideForm2showForm1() {
  document.getElementById("form2").style.display = "none";
  document.getElementById("form1").style.display = "block";
  document.getElementById("back-btn").style.display = "none";
}

function hideForm2showForm3() {
  document.getElementById("form2").style.display = "none";
  document.getElementById("form3").style.display = "block";
  document.getElementById("back-btn").style.display = "block";
}

function hideForm3showForm2() {
  document.getElementById("form3").style.display = "none";
  document.getElementById("form2").style.display = "block";
  document.getElementById("back-btn").style.display = "block";
}

document
  .getElementById("class_duration")
  .addEventListener("input", function (event) {});

document
  .getElementById("class_duration")
  .addEventListener("blur", function (event) {
    roundToNearestFiveMinutes(event.target);
  });

const checkboxes = document.querySelectorAll(
  ".checkbox-item input[type='checkbox']"
);
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const container = this.parentElement;
    if (this.checked) {
      container.classList.add("checkbox-item-selected");
    } else {
      container.classList.remove("checkbox-item-selected");
    }
  });
});

function removeEquipment(e) {
  e.target.closest(".control-group").remove();
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#form3").addEventListener("click", function (e) {
    if (e.target.classList.contains("add-more")) {
      var html = document.querySelector(".copy").innerHTML;
      var newElem = document.createElement("div");
      newElem.innerHTML = html;
      document
        .querySelector(".after-add-more")
        .insertAdjacentElement("beforebegin", newElem);

      // Bind remove button event
      newElem
        .querySelector(".remove")
        .addEventListener("click", removeEquipment);
    }
  });

  // Bind initial remove button event
  document.querySelectorAll(".remove").forEach(function (removeBtn) {
    removeBtn.addEventListener("click", removeEquipment);
  });

  document.getElementById("description").addEventListener("keyup", function () {
    var maxLength = 500;
    var currentLength = this.value.length;

    if (currentLength >= maxLength) {
      document.getElementById("current").textContent = maxLength;
    } else {
      document.getElementById("current").textContent = currentLength;
    }
  });
});

function readURL(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      $("#class-thumbnail-preview").attr("src", e.target.result);
      $("#class-thumbnail-preview").css("border-radius", "10px");
      $(".image-preview").show();
      $("#start").hide();
    };

    reader.readAsDataURL(input.files[0]);
  }
}

$("#class_thumbnail").change(function () {
  readURL(this);
});

$(function () {
  $(".bs-datepicker").datepicker({
    dateFormat: "yy-mm-dd",
    changeYear: true,
    startDate: "0d",
  });
  $(".bs-timepicker").timepicker({
    defaultTime: "14:00",
    showMeridian: false,
    startTime: "10:00",
    dynamic: true,
    dropdown: true,
    scrollbar: true,
  });
});

$(document).ready(function () {
  var formId = "myForm";
  //var formErrors = "{{ form_errors|escapejs }}";
  handleFormValidation(formId, formErrors);
});
function updateImage(muscleValue) {
  // Convert the checkbox value to lowercase
  muscleValue = muscleValue.toLowerCase();
  const bodyImage = document.getElementById("body-image");
  bodyImage.src = `/static/images/Human Body/${muscleValue}.png`;
}
