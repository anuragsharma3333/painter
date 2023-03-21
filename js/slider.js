$(document).ready(function () {
    $(".slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      nextArrow: "<button type='button' class='slick-next'>next</button>",
      prevArrow: "<button type='button' class='slick-prev'>back</button>",
      // dots: true,
      // dotsClass: "button__bar",
    });
  });