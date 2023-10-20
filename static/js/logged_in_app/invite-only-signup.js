jQuery(document).ready(function () {
  jQuery(".datepicker").datepicker({
    dateFormat: "yy-mm-dd",
    changeYear: "true",
    changeMonth: true,
    yearRange: "-60:+0",
    maxDate: "0",
  });
});

$(document).ready(function () {
  $("#countrySelect").select2({
    templateResult: formatState,
    templateSelection: formatState,
  });
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "/user/pages/images/flags";
    var $state = $(
      '<span><img src="' +
        state.element.dataset.flag +
        '" class="img-flag" /> ' +
        state.text +
        "</span>"
    );
    return $state;
  }
  var formId = "usercoachsignup";
  //var formErrors = "{{ form_errors|escapejs }}";

  // Call the handleFormValidation function with the form ID and form errors
  handleFormValidation(formId, formErrors);
});

function formatState(state) {
  if (!state.id) {
    return state.text;
  }
  var baseUrl = "/user/pages/images/flags";
  var $state = $(
    '<span><img src="' +
      state.element.dataset.flag +
      '" class="img-flag" /> ' +
      state.text +
      "</span>"
  );
  return $state;
}

function hideForm1showForm2() {
  document.getElementById("form1").style.display = "none";
  document.getElementById("form2").style.display = "block";
}

function hideForm2showForm1() {
  document.getElementById("form1").style.display = "block";
  document.getElementById("form2").style.display = "none";
}

function onFileSelected(event) {
  const input = event.target;
  const fileName = input.files[0].name;
  // Update the input element with the file name
  input.setAttribute("placeholder", fileName);
}
