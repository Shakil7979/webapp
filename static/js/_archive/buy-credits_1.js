$(document).ready(function () {
  $("select").niceSelect();
  console.log("Initializing Owl Carousel");
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
  console.log("Owl Carousel initialized");
});
