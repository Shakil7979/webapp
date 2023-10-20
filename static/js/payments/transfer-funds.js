function attachEventListeners() {
  $(".btn-preferred").on("click", function () {
    // Set payment_method.preferred to true and save the changes
  });

  $(".btn-delete").on("click", function () {
    $(this).closest(".card-back").find(".buttons-set-1").hide();
    $(this).closest(".card-back").find(".buttons-set-2").show();
  });

  $(".btn-yes").on("click", function () {
    // Delete the payment method
  });

  $(".btn-no").on("click", function () {
    $(this).closest(".card-back").find(".buttons-set-2").hide();
    $(this).closest(".card-back").find(".buttons-set-1").show();
  });
}

$(document).ready(function () {
  var carousel = $("#owl-carousel-payment-methods");
  carousel.owlCarousel({
    center: true,
    nav: false,
    dots: false,
    loop: false,
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

  $(".owl_card_main_wrap").on("mouseenter", function () {
    if ($(this).hasClass("active")) {
      $(this).addClass("flip");
    }
  });

  $(".owl_card_main_wrap").on("mouseleave", function () {
    $(this).removeClass("flip");
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
  const withdrawalAmountInput = document.getElementById("withdrawal-amount");
  const withdrawalCurrencySelect = document.getElementById(
    "withdrawal-currency"
  );
  const withdrawalTotalElement = document.getElementById("withdrawal-total");

  window.updateWithdrawalAmount = function () {
    console.log("updating Withdrawal");
    let amount = withdrawalAmountInput.value;
    if (amount === "Withdrawal Amount") {
      amount = "0";
    } else {
      amount = parseFloat(amount.replace(",", ".")).toFixed(2);
      if (isNaN(amount)) {
        amount = "0";
      } else {
        withdrawalAmountInput.value = amount.replace(",", ".");
      }
    }
    const currentText = withdrawalTotalElement.textContent;
    const currency = currentText.split(" ")[0];
    withdrawalTotalElement.textContent = `${currency} ${amount}`;
  };

  window.updateWithdrawalCurrency = function () {
    let currency =
      withdrawalCurrencySelect.options[withdrawalCurrencySelect.selectedIndex]
        .text;
    if (currency === "Select Currency") {
      currency = "USD";
    }
    const currentText = withdrawalTotalElement.textContent;
    const amount = currentText.split(" ")[1];
    withdrawalTotalElement.textContent = `${currency} ${amount}`;
  };

  // Allow only numbers, commas and restrict to two decimal places
  withdrawalAmountInput.addEventListener("input", function (e) {
    const regex = /^(\d+)?([.,]?\d{0,2})?$/;
    if (!regex.test(e.target.value)) {
      e.target.value = e.target.value.substring(0, e.target.value.length - 1);
    }
  });

  var formId = "transfer-funds-form";
  //var formErrors = "{{ form_errors|escapejs }}";
  handleFormValidation(formId, formErrors);
});
