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

