// $(document).ready(function() {
//   $("#owl-carousel-payment-methods").owlCarousel({
//       items: 1,  // Number of items to show
//       loop: true, // Looping
//       nav: true,  // Show navigation buttons
//       dots: true, // Show pagination dots
//       margin: 20, // Space between items
//   });
// });
$(document).ready(function () {
  //$('select').niceSelect();
  var carousel = $("#owl-carousel-payment-methods");
  carousel.owlCarousel({
    center: true,
    nav: false,
    dots: true,
    loop: true,
    responsiveClass: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  carousel.on("translated.owl.carousel", function () {
    var current = $(this).find(".owl-item.active .owl_card_main_wrap");
    $(".owl_card_main_wrap").removeClass("active");
    current.addClass("active");
    $(".card-back .buttons-set-1").hide();
    current.find(".card-back .buttons-set-1").show();
  });
  carousel.on("changed.owl.carousel", function (event) {
    var currentIndex = event.item.index;
    var currentItem = carousel.find(".owl-item").eq(currentIndex).find(".item");
    var paymentMethodId = currentItem.attr("data-value");
    document.getElementById("selected_payment_method").value = paymentMethodId;
  });
  function handleItemClick() {
    var index = $(this).parent().index();
    carousel.trigger("to.owl.carousel", [index, 300]);
  }
  carousel.on("initialized.owl.carousel", function () {
    $(".payment-method-item").on("click", handleItemClick);
  });
  const firstPaymentMethod = document.querySelector(".payment-method-item");
  if (firstPaymentMethod) {
    document.getElementById("selected_payment_method").value =
      firstPaymentMethod.dataset.value;
  }

  var formId = "buy-credits-form";
  //var formErrors = "{{ form_errors|escapejs }}";
  handleFormValidation(formId, formErrors);
});

window.addEventListener("load", function () {
  const creditPackages = document.querySelectorAll(".credit-package");
  const paymentCurrency = document.getElementById(".payment-currency");

  creditPackages.forEach((package) => {
    package.addEventListener("click", () => {
      // Deselect previously selected package
      document
        .querySelector(".credit-package.selected")
        ?.classList.remove("selected");

      // Select the clicked package
      package.classList.add("selected");
      package.querySelector('input[type="radio"]').checked = true;
    });
  });

  // Listen for changes in the currency dropdown (assuming it has an id="currencyDropdown")
  const currencyDropdown = document.getElementById("currencyDropdown");
  currencyDropdown?.addEventListener("change", (event) => {
    paymentCurrency.textContent = event.target.value;
  });
});

// function attachEventListeners() {
//   $(".btn-preferred").on("click", function () {
//     // Set payment_method.preferred to true and save the changes
//   });

//   $(".btn-delete").on("click", function () {
//     $(this).closest(".card-back").find(".buttons-set-1").hide();
//     $(this).closest(".card-back").find(".buttons-set-2").show();
//   });

//   $(".btn-yes").on("click", function () {
//     // Delete the payment method
//   });

//   $(".btn-no").on("click", function () {
//     $(this).closest(".card-back").find(".buttons-set-2").hide();
//     $(this).closest(".card-back").find(".buttons-set-1").show();
//   });
// }

//changing the value of card currency according to the abvove dropdown
var currencyDropdown = document.getElementById("payment_currency");
var paymentAmounts = document.getElementsByClassName("payment_amount");
function updatePaymentAmount() {
  var selectedOption = currencyDropdown.options[currencyDropdown.selectedIndex];
  var selectedCurrency = selectedOption.text;
  if (
    selectedCurrency !== "USD" &&
    selectedCurrency !== "INR" &&
    selectedCurrency !== "EUR" &&
    selectedCurrency !== "SGD"
  ) {
    selectedCurrency = "USD";
  }
  for (var i = 0; i < paymentAmounts.length; i++) {
    var paymentAmount = paymentAmounts[i];
    paymentAmount.innerHTML = selectedCurrency + "&nbsp;";
  }
}

currencyDropdown.addEventListener("change", updatePaymentAmount);

// var cards = document.querySelectorAll(".back-content");

// cards.forEach(function (card) {
//   var buttonsSet2 = card.querySelector(".buttons-set-2");
//   buttonsSet2.style.display = "none";

//   var buttonsSet1 = card.querySelector(".buttons-set-1");
//   buttonsSet1.style.display = "block";
// });
// var deleteButton = document.querySelector("#del-btn");
// deleteButton.addEventListener("hover", function () {
//   console.log("hi");
//   // buttonsSet1.style.display = "none";
//   // buttonsSet2.style.display = "block";
// });

$(document).ready(function () {
  $(".owl_card_main_wrap").hover(
    function () {
      $(this).find(".card-back").show();
      $(this).find("#front-card").hide();
    },
    function () {
      $(this).find(".card-back").hide();
      $(this).find("#front-card").show();
    }
  );

  $(".owl_card_main_wrap .buttons-set-2").hide();
  $(".owl_card_main_wrap #del-btn").click(function (e) {
    e.preventDefault();
    $(this).closest(".owl_card_main_wrap").find(".buttons-set-1").toggle();
    $(this).closest(".owl_card_main_wrap").find(".buttons-set-2").toggle();
  });
  $(".owl_card_main_wrap .btn-no").click(function (e) {
    e.preventDefault();
    $(this).closest(".owl_card_main_wrap").find(".buttons-set-1").toggle();
    $(this).closest(".owl_card_main_wrap").find(".buttons-set-2").toggle();
  });
  $(".owl_card_main_wrap #del-btn").click(function (e) {
    e.preventDefault();
    var card = $(this).closest(".owl_card_main_wrap");
    var carousel = card.closest(".owl-carousel");
    card.remove(); // Remove the clicked card from the DOM
    carousel.trigger("refresh.owl.carousel");
  });
  $(".owl_card_main_wrap .btn-preferred").click(function (e) {
    e.preventDefault();
    var card = $(this).closest(".owl_card_main_wrap");
    var cardTypeLogo = card.find(".card-type-logo");
    // Add logic here to set the preferred card in your backend or storage
    // ...
    var newLogoSrc = "{% static 'path/to/preferred_card_logo.png' %}";
    cardTypeLogo.attr("src", newLogoSrc);
  });
});
