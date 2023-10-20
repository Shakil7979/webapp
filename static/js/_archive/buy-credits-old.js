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
  $("select").niceSelect();
  $(".owl_credit_card").owlCarousel({
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
  attachEventListeners();

  $(".owl_credit_card").on("translated.owl.carousel", function () {
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
});
