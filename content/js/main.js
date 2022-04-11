$(document).ready(function () {
  // START NAVBAR LINKS ACTIVE

  const currentLocation = location.href;
  const menuItem = document.querySelectorAll(
    ".nav-bar .nav-flex .navbar-links li a"
  );
  const menuLength = menuItem.length;
  for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].className = " active";
    }
  }
  // END NAVBAR LINKS ACTIVE

  // START NAVBAR LINKS IN MOBILE
  $(".toggle-btn").on("click", function () {
    $(".nav-bar .nav-flex .navbar-links").toggleClass("active");
  });
  // END NAVBAR LINKS IN MOBILE

  // START HEADER SLIDER
  $(".header-slider").owlCarousel({
    loop: true,
    margin: 30,
    rtl: true,
    dots: true,
    center: true,
    autoplay: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      "<i class='fa-solid fa-angle-left owl-btn'></i>",
      "<i class='owl-btn fa-solid fa-angle-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
        dots: true,
      },
    },
  });
  // END HEADER SLIDER
  // START HEADER SLIDER
  $(".services-slider").owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    dots: true,
    center: true,
    autoplay: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      "<i class='fa-solid fa-angle-left owl-btn'></i>",
      "<i class='owl-btn fa-solid fa-angle-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
        dots: true,
      },
    },
  });
  // END HEADER SLIDER

  $(".testimonials-slider").owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    dots: true,
    center: true,
    // autoplay: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      "<i class='fa-solid fa-angle-left owl-btn'></i>",
      "<i class='owl-btn fa-solid fa-angle-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
        dots: true,
      },
    },
  });
  // WOW JS
  new WOW().init();
});
