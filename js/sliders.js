$(document).ready(function () {
  $(".category__slider").slick({
    prevArrow: `<button type="button" class="slick-prev"></button>`,
    nextArrow: `<button type="button" class="slick-next"></button>`,
    dots: true,
    dotsClass: "slick-dots category-slick-dots",
    adaptiveHeight: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1312,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 636,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
  $(".newProducts__slider").slick({
    prevArrow: `<button type="button" class="slick-prev"></button>`,
    nextArrow: `<button type="button" class="slick-next"></button>`,
    dots: true,
    dotsClass: "slick-dots newProducts-slick-dots",
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1312,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 636,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".product-slider-big").slick({
    prevArrow: `<button type="button" class="slick-prev"></button>`,
    nextArrow: `<button type="button" class="slick-next"></button>`,

    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".product-slider-min",
  });

  $(".product-slider-min").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".product-slider-big",
    infinite: true,
    focusOnSelect: true,
    variableWidth: true,
  });

  $(".news__slider").slick({
    arrows: true,
    prevArrow: `<button type="button" class="slick-prev"></button>`,
    nextArrow: `<button type="button" class="slick-next"></button>`,

    variableWidth: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".news__list").slick({
    arrows: false,
    dotsClass: "slick-dots category-slick-dots",
    variableWidth: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
  $(".blog__video-list").slick({
    arrows: false,
    dots: true,
    dotsClass: "slick-dots category-slick-dots",
    variableWidth: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: true,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".blog__client-list").slick({
    arrows: false,
    dots: true,
    dotsClass: "slick-dots category-slick-dots",
    variableWidth: false,
    rows: 2,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// $('#button-rotation').on("click", "div", function(e) {
//   $('.slider-for').slick('slickGoTo', $(this).index() + s1);
// });
