$(document).ready(function () {

  $('body').css('overflow-x', 'hidden');


  let hasAnimated = false;

  $(window).scroll(function () {

    let scrollPosition = $(window).scrollTop();
    let windowHeight = $(window).height();


    let aboutOffset = $(".about").offset().top;


    if (scrollPosition + windowHeight > aboutOffset && !hasAnimated) {

      $('.images').css({
        opacity: 0,
        left: '-200px',
        position: 'relative'
      }).animate({
        left: '0',
        opacity: '1',
      },1000);


      $('.content').css({
        opacity: 0,
        right: '-200px',
        position: 'relative'
      }).animate({
        right: '0',
        opacity: '1',
      },1000);


      hasAnimated = true;
    } else if (scrollPosition + windowHeight < aboutOffset) {

      hasAnimated = false;
    }
  });
});
