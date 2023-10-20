$(document).ready(function () {

    //Menu Item CLick Js
    $('.menu_item').click(function () {
        $('.menu_item').removeClass('active');
        $(this).addClass('active');
    });

    //Menu Js
    $('.menu_toggle_btn').click(function () {
        $('.header_menu').toggleClass('open_menu');
        $('body').toggleClass('cm-overflow');
    });

    //Section Scroll
    $('.section_move').click(function (e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        if (target.length) {
            var scrollTo = target.offset().top - 0;
            $('body, html').animate({
                scrollTop: scrollTo + 'px'
            }, 2000);
        }
    });


    // Tabs Form
    const control = document.querySelectorAll('.tab-control')
    const tabs = document.querySelectorAll('.tab')

    for (let i = 0; i < control.length; i++) {
        control[i].addEventListener('click', tabDisplay)
    }

    // start with the first tab
    // tabs[0].style.display = 'block'

    function tabDisplay() {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none'
        }
        tabs[this.value].style.display = 'block'
    }
    $('#display-tab-control li').click(function () {
        $('#display-tab-control li').removeClass('active');
        $(this).addClass('active');
    });

});


jQuery.extend(jQuery.validator.messages, {
    required: "This field is required",
    remote: "Please fix this field",
    email: "Please enter a valid email address",
    url: "Please enter a valid URL",
    date: "Please enter a valid date",
    dateISO: "Please enter a valid date (ISO)",
    number: "Please enter a valid number",
    digits: "Please enter only digits",
    creditcard: "Please enter a valid credit card number",
    equalTo: "Please enter the same value again",
    accept: "Please enter a value with a valid extension",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters"),
    minlength: jQuery.validator.format("Please enter at least {0} characters"),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long"),
    range: jQuery.validator.format("Please enter a value between {0} and {1}"),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}"),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}")
});

jQuery(document).ready(function () {
    jQuery(".datepicker").datepicker({
        dateFormat: 'yy-mm-dd',
        changeYear: true,
        changeMonth: true,
        yearRange: "-60:+0",
        maxDate: '0'
    });
});

$(document).ready(function () {
    var val = {
        rules: {
            social_media_username: "required",
            firstname: "required",
            lastname: "required",
            birthdaydate: "required",
            nationality: "required",
            passport: "required",
            user_passport_id_image: "required",
            username: "required",
            phoneno: {
                required: true,
                digits: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 25,
            },
            retypepassword: {
                required: true,
                minlength: 8,
                maxlength: 25,
                equalTo: "#password"
            },
            subscriber_fee: {
                required: true,
            }
        },
        // Specify validation error messages
        messages: {
            social_media_username: "Please enter social media username",
            firstname: "Please enter your first name",
            lastname: "Please enter your last name",
            birthdaydate: "Please enter your birthday",
            nationality: "Please select your nationality",
            passport: "Please enter your passport/id number",
            user_passport_id_image: " Please upload a picture of your passport/id",
            username: "Please enter your username",
            phoneno: {
                required: "Please enter phone number",
                minlength: "Please enter 10 digit mobile number",
                maxlength: "Please enter 10 digit mobile number",
                digits: "Only numbers are allowed in this field"
            },
            email: {
                required: "Please enter email",
                email: "Please enter a valid e-mail",
            },
            password: {
                required: "Please enter password",
                minlength: "Password should be minimum 8 characters",
                maxlength: "Password should be maximum 25 characters",
            },
            retypepassword: {
                required: "Please enter retype password",
            },
            subscriber_fee: {
                required: "Please enter subscriber fee",
            }
        }
    }
    $("#myForm").multiStepForm({
        validations: val,
    }).navigateTo(0);
    
    /*$("#myForm").submit(function (event) {
        event.preventDefault();
        toastr.success("");
        window.location.href = "successfully-sign-up.html";
    });*/
    document.getElementById("myForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
    });
});

$(function () {
    $('input[type="file"]').change(function () {
        if ($(this).val() != "") {
            $(this).css('color', '#fff');
        } else {
            $(this).css('color', 'transparent !important');
        }
    });
})


$(".dropdown img.flag").addClass("flagvisibility");
$(".dropdown dt a").click(function () {
    $(".dropdown dd ul").toggle();
});
$(".dropdown dd ul li a").click(function () {
    var text = $(this).html();
    console.log($(this).data('value'));
    $('#socialmedia').val($(this).data('value'));
    $(".dropdown dt a span").html(text);
    $(".dropdown dd ul").hide();
});


/*CHATGPT Function Dropdown invite only
$(document).ready(function() {
    $(".dropdown dt a").on('click', function(e) {
        e.preventDefault();
        $(".dropdown dd ul").slideToggle('fast');
    });

    $(".dropdown dd ul li a").on('click', function() {
        $(".dropdown dd ul").hide();
        var text = $(this).find('span').html();
        $(".dropdown dt a span").html(text);
    });

    $(document).on('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
    });
});
*/

function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}
$(document).bind('click', function (e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});
$(".dropdown img.flag").toggleClass("flagvisibility");


$('#myFileInput').attr('title', '');


(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()


let telInput2 = $("#phoneno")
telInput2.intlTelInput({
    allowExtensions: true,
    formatOnDisplay: true,
    autoFormat: true,
    autoHideDialCode: true,
    autoPlaceholder: true,
    defaultCountry: "auto",
    ipinfoToken: "yolo",
    nationalMode: false,
    numberType: "MOBILE",
    preferredCountries: ['sa', 'ae', 'qa', 'om', 'bh', 'kw', 'ma'],
    preventInvalidNumbers: true,
    separateDialCode: true,
    initialCountry: 'sg',
    geoIpLookup: function (callback) {
        $.get("http://ipinfo.io", function () {}, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/js/utils.js"
})

toastr.options = {
    "closeButton": true,
    "progressBar": true
}

function onFileSelected(event) {
    const input = event.target;
    const fileName = input.files[0].name;
    // Update the input element with the file name
    input.setAttribute("placeholder", fileName);
}
