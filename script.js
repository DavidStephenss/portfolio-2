// window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }

// function myFunction () {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") { 
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

$(window).scroll(function () {
  $(".top").css("opacity", 1 - $(window).scrollTop() / 25);
  });