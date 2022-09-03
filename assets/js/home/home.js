//Hi my home.js file 

//Scroll Navbar and buttons Functions start
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('header').style.background = "white";
    document.querySelector(".signUpButton").style.background = "#3080E3"
    document.querySelector(".signUpButton").style.color = "white"
    document.querySelector(".signInButton").style.color = "black" 
    $(".signUpButton").hover(function(){
        $(this).css("background", "#fd723b");
    },
    function(){
        $(this).css({background: "#3080E3",color:"white"});
    });
  } else {
    document.querySelector(".hello").style.background = "none";
    document.querySelector(".signUpButton").style.background = "white"
    document.querySelector(".signUpButton").style.color = "black"
    document.querySelector(".signInButton").style.color = "white"
    $(".signUpButton").hover(function(){
        $(this).css({background: "#fd723b", color: "white"});
    },
    function(){
        $(this).css({background: "white", color: "black"});
    });
    
  }
}
//Scroll Navbar and buttons Functions end

//Burger Menu start
$("ul.navListBurger").fadeOut(0.1);
$('.clickBurger').click(function () {
  $("ul.navListBurger").fadeToggle(100);
});
//Burger Menu end






