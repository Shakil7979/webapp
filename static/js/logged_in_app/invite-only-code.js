function autoTab(currentElement, nextElementId) {
  if (currentElement.value.length >= currentElement.maxLength) {
    document.getElementById(nextElementId).focus();
  }
}
$(document).ready(function () {
  // Assuming you have the form ID and form errors available in your context dictionary
  var formId = "newslettersubscribe";
  //var formErrors = "{{ form_errors|escapejs }}";
  // Call the handleFormValidation function with the form ID and form errors
  handleFormValidation(formId, formErrors);
});
