$(function(){
 var shrinkHeader = 3;
 $window = $(window)
 $(window).scroll(function() {
  var scroll = getCurrentScroll();
  if ( scroll >= shrinkHeader && $window.width() > 947) {
   $('header').addClass('shrink');
 }
 else {
  $('header').removeClass('shrink');
}
});

 function getCurrentScroll() {
  return window.pageYOffset;
}
});

$(document).ready(function() {
 
  $("#owl-example").owlCarousel({

    items : 4,
    itemsDesktop : [1400,3], 
    itemsTablet : [960, 2],
    itemsMobile : [565, 1],
  }
  );
  
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });
});