$(".owl_servise_slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoHeight: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// Image Change Animation Js
// Image Animation One Js
var textfifth = new Array();
textfifth[0] = new Image();
textfifth[0].src = "/static/images/product-1.png";
textfifth[1] = new Image();
textfifth[1].src = "/static/images/product-2.png";
textfifth[2] = new Image();
textfifth[2].src = "/static/images/product-3.png";
var point5 = 0;

function changetextfifth() {
  $(".product_animation_one").html(textfifth[point5]);
  if (point5 < textfifth.length - 1) {
    point5++;
  } else {
    point5 = 0;
  }
  setTimeout(changetextfifth, 2000);
}
changetextfifth();

// Image Animation Two Js
var textninth = new Array();
textninth[0] = new Image();
textninth[0].src = "/static/images/product-4.png";
textninth[1] = new Image();
textninth[1].src = "/static/images/product-5.png";
textninth[2] = new Image();
textninth[2].src = "/static/images/product-6.png";
textninth[3] = new Image();
textninth[3].src = "/static/images/product-5.png";
var point10 = 0;

function changetextninth() {
  $(".product_animation_two").html(textninth[point10]);
  if (point10 < textninth.length - 1) {
    point10++;
  } else {
    point10 = 0;
  }
  setTimeout(changetextninth, 2000);
}
changetextninth();
