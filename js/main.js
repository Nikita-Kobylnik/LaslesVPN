$(".header__burger").click(function (e) {
  $(".header__burger, .menu").toggleClass("active");
  $("body").toggleClass("lock");
});

$(".menu__list-item").click(function (e) {
  $(".header__burger, .menu").removeClass("active");
  $("body").removeClass("lock");
});

$(document).ready(function () {
  $(".customer__slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    // adaptiveHeight: true,
    // variableWidth: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          // centerMode: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          variableWidth: true,
        },
      },
    ],
  });
});
