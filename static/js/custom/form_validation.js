function handleFormValidation(formId, formErrors) {
    if (formErrors) {
        
        var errors = JSON.parse(formErrors);
        console.log(errors)
        
        for (var fieldName in errors) {
            var fieldSelector = '#' + formId + ' [name="' + fieldName + '"]';
            var fieldType = $(fieldSelector).attr('type');
            if (fieldName === '__all__' || fieldType === 'checkbox' || $(fieldSelector).is('select')) {
                var errorMessage = fieldName + ": " + errors[fieldName].join("; ");
                // Display non-field-specific error as a popup message
                toastr.error(errorMessage, '', {
                    timeOut: 5000
                }); // Adjust duration as needed

                if (fieldType === 'checkbox') {
                    var labelElement = $(fieldSelector).next('.form-check-label');
                    var imgElement = $('<img src="/static/images/Wrong.svg" style="margin-left: 5px; height: 30px">');

                    labelElement.append(imgElement);
                }
                if ($(fieldSelector).is('select')) {
                    errorMessage = errors[fieldName].join("; ");
                    $(fieldSelector + " option[value='error']").remove();
                    // create new option with error message
                    //var errorOption = new Option(errorMessage, 'error', true, true);
                    // add the new option to the select
                    //$(fieldSelector).append(errorOption).trigger('change');

                    $(fieldSelector).attr("title", errorMessage)
                        .css('background-image', 'url(/static/images/Wrong.svg)')
                        .css('background-repeat', 'no-repeat')
                        .css('background-position', 'right center')
                        .css('background-size', '25px 25px')
                        .tooltip({
                            placement: 'right',
                            trigger: 'hover'
                        });

                }
            } else {
                // Display field-specific error within the input field
                var errorMessage = errors[fieldName].join("; ");
                toastr.error(fieldName + ": " + errors[fieldName].join("; "), '', {
                    timeOut: 5000
                }); // Adjust duration as needed

                var originalPlaceholder = $(fieldSelector).attr('placeholder');
                $(fieldSelector).attr('data-original-placeholder', originalPlaceholder);
                $(fieldSelector).attr('original-error-message', errorMessage);
                $(fieldSelector).attr('placeholder', errorMessage);
                $(fieldSelector).addClass('error');
                $(fieldSelector).css('color', 'red !important');

                $(fieldSelector).attr("title", errorMessage)
                    .css('background-image', 'url(/static/images/Wrong.svg)')
                    .css('background-repeat', 'no-repeat')
                    .css('background-position', 'right center')
                    .css('background-size', '25px 25px')
                    .tooltip({
                        placement: 'right',
                        trigger: 'hover'
                    });

                // Restore original placeholder on focus
                $(fieldSelector).on('focus', function () {
                    var originalPlaceholder = $(this).attr('data-original-placeholder');
                    $(this).attr('placeholder', originalPlaceholder);
                });

                // Show error message again when field loses focus
                $(fieldSelector).on('blur', function () {
                    if (!$(this).val()) { // If field is empty
                        var originalErrorMessage = $(this).attr('original-error-message');
                        $(this).attr('placeholder', originalErrorMessage);
                    }
                });
            }
        }
    }
}