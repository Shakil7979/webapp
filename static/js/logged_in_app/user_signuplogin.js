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

  var formId1 = "userlogin";
  var formId2 = "form2";
  //var formErrors = "{{ form_errors|escapejs }}";

  // Call the handleFormValidation function with the form ID and form errors
  handleFormValidation(formId1, formErrors);
  handleFormValidation(formId2, formErrors);
});

/* Update the JavaScript code to display the login form */
/* Update the JavaScript code to display the login form */
document.getElementById("login-toggle").addEventListener("click", function () {
  document.getElementById("userlogin").style.display = "block";
  document.getElementById("form2").style.display = "none";
  document.getElementById("login-toggle").classList.add("active");
  document.getElementById("signup-toggle").classList.remove("active");
});

document.getElementById("signup-toggle").addEventListener("click", function () {
  document.getElementById("userlogin").style.display = "none";
  document.getElementById("form2").style.display = "block";
  document.getElementById("login-toggle").classList.remove("active");
  document.getElementById("signup-toggle").classList.add("active");
});

/* Add the following code to show the login form by default */
window.onload = function () {
  if (
    !document.getElementById("login-toggle").classList.contains("active") &&
    !document.getElementById("signup-toggle").classList.contains("active")
  ) {
    document.getElementById("userlogin").style.display = "block";
    document.getElementById("form2").style.display = "none";
    document.getElementById("login-toggle").classList.add("active");
    document.getElementById("signup-toggle").classList.remove("active");
  } else if (
    document.getElementById("login-toggle").classList.contains("active")
  ) {
    document.getElementById("userlogin").style.display = "block";
    document.getElementById("form2").style.display = "none";
  } else if (
    document.getElementById("signup-toggle").classList.contains("active")
  ) {
    document.getElementById("userlogin").style.display = "none";
    document.getElementById("form2").style.display = "block";
  }
};
