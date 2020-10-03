/* drawer */
$(document).ready(function () {
  $(".drawer").drawer();
});

/* wow-js */
new WOW().init();

/* swiper */
var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  breakpoints: {
    767: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

/* アコーディオン */
$(".accordion-body").hide();
$(".accordion-head").click(function () {
  $(this).next().slideToggle();
  $(this).children(".accordion-icon").toggleClass("is-open");
});

/* page-top */
$("#page-top").click(function () {
  $("html,body").animate({ scrollTop: 0 }, "500");
});

$("#page-top").hide();
$(window).scroll(function () {
  if ($(window).scrollTop() > 80) {
    $("#page-top").fadeIn("300");
  } else {
    $("#page-top").fadeOut("300");
  }
});

/* スムーススクロール */
$('a[href^="#"]').click(function() {
  let speed = 300;
  let id = $(this).attr("href");
  let target = $("#" == id ? "html" : id);
  let position = $(target).offset().top-70;
  $("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});