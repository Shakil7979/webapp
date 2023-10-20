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

function roundToNearestFiveMinutes(input) {
  let value = parseInt(input.value);
  let roundedValue = Math.round(value / 5) * 5;
  input.value = roundedValue;
}

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

$(document).ready(function () {
  const form = $("#myForm");
  const csrf_token = $("input[name=csrfmiddlewaretoken]").val();
  const file_input = $("#class_video");
  const thumbnail_input = $("#class_thumbnail");
  const progressBar = $("#uploadVideoProgressBar");
  const progressPercentage = $("#ProgressBarPercentage");


  var formId = "myForm";
  //var formErrors = "{{ form_errors|escapejs }}";
  console.log("This is how we do it!", formErrors)
  handleFormValidation(formId, formErrors);
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

function onFileSelected(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function (event) {
    var file_data = event.target.result;
    $("#class_video_hidden").val(file_data);
  };
  reader.readAsDataURL(file);
}


//New Upload Functions
function uploadFile(fileInput, type) {
  const file = fileInput.files[0];
  if (!file) {
      return;
  }

  const formData = new FormData();
  formData.append(type, file);

  let uploadUrl = '/api/upload-ondemand-video/';  
  if (type === 'class_thumbnail') {
      uploadUrl = '/api/upload-class-thumbnail/';
  }

  $.ajax({
      url: uploadUrl,
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data) {
          $('#' + type + '_hidden').val(data.url); 
          alert('File uploaded successfully.');
      },
      error: function(err) {
          alert('Failed to upload file. Please try again.');
      }
  });
}

$('#inputGroupFile01').change(function() {
  uploadFile(this, 'class_video');
});

$('#class_thumbnail').change(function() {
  uploadFile(this, 'class_thumbnail');
});

function handleCheckboxClick(checkboxId, pathId) {

  const checkbox = document.getElementById(checkboxId);
  const pathGroupFront = document.querySelector('#Layer_2_front .muscle-' + checkboxId);
  const pathGroupBack = document.querySelector('#Layer_1_back .muscle-' + checkboxId);

  if (checkbox || pathGroupFront || pathGroupBack) {
    
    const pathsFront = pathGroupFront && pathGroupFront.getElementsByTagName('path');
    const pathsBack = pathGroupBack && pathGroupBack.getElementsByTagName('path');

    if(pathGroupFront){
      for (let i = 0; i < pathsFront.length; i++) {
          if (checkbox.checked) {
              pathsFront[i].classList.add('muscle-f-red');
  
          } else {
            pathsFront[i].classList.remove('muscle-f-red');
          }
      }
    }

    if(pathGroupBack){
      for (let i = 0; i < pathsBack.length; i++) {
        if (checkbox.checked) {
            pathsBack[i].classList.add('muscle-b-red');
  
        } else {
          pathsBack[i].classList.remove('muscle-b-red');
        }
      }
    }
  }
}