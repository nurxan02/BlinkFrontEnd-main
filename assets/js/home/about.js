'use strict'
window.onscroll = function () {
    var scrollUp = document.querySelector(".scrollUpButton");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollUp.style.opacity = "100";
    } else {
        scrollUp.style.opacity = "0";
    }
    scrollUp.addEventListener("click", function () {
      console.log("asaascasc");
        window.scrollTo({
          top:0
        })
    })
  };
//Scroll-top & Navbar & buttons Functions end

//Burger Menu start
$("ul.navListBurger").fadeOut(0.1);
$('.clickBurger').click(function () {
  $("ul.navListBurger").fadeToggle(100);
});
//Burger Menu end

//Carousel start
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  items: 2,
  responsive: {
      0:{
        items:1,
      },
      600: {
          items: 1,
      },
      1000: {
          items: 2,
      }
  }
});

//Carousel end

