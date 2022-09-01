

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
        // console.log("mouseover");
    },
    function(){
        $(this).css({background: "white", color: "black"});
        // console.log("mouse out");
    });
    
  }
}
//Scroll Navbar and buttons Functions end

//Burger Menu start
$('.clickBurger').click(function (){

})
//Burger Menu end
