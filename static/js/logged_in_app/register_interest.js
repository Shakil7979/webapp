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

  var formId = "registerInterest";
  //var formErrors = "{{ form_errors|escapejs }}";

  // Call the handleFormValidation function with the form ID and form errors
  handleFormValidation(formId, formErrors);

});

$(".dropdown-toggle").on("click", function() {
  $(".dropdown-menu").toggle();
});

$(".dropdown-menu a").on("click", function() {
  var selectedValue = $(this).attr("data-value");
  var selectedText = $(this).html();
  $("#selected-option").html(selectedText);
  $("#social_media_platform").val(selectedValue);
  $(".dropdown-menu").hide();
});

$(document).on("click", function(e) {
  if (!$(e.target).closest(".dropdown").length) {
    $(".dropdown-menu").hide();
  }
});