$(document).ready(function () {
    let isAnimate = false;

    $(window).scroll(function () {
        let scrollPosition = $(window).scrollTop();
        let sectionOffset = $('.numbers').offset().top;
        let windowHeight = $(window).height();
        let sectionHeight = $('.numbers').outerHeight();

        if (
            scrollPosition + windowHeight > sectionOffset &&
            scrollPosition < sectionOffset + sectionHeight &&
            !isAnimate
        ) {
          
            $(".part-1").css({
                position: "relative",
                opacity: 0,
                left: "-100px"
            }).animate({
                opacity: 1,
                left: "0px"
            }, 2000);

            $(".num-header").css({
                position: 'relative',
                top: "-100px",
                opacity: 0
            }).animate({
                opacity: 1,
                top: "0px"
            }, 3000);

            $(".num-flex").css({
                position: 'relative',
                bottom: "-100px",
                opacity: 0
            }).animate({
                opacity: 1,
                bottom: "0px"
            }, 3000);

            isAnimate = true; 
        } 
    
        else if (
            (scrollPosition + windowHeight < sectionOffset ||
                scrollPosition > sectionOffset + sectionHeight) &&
            isAnimate
        ) {
            isAnimate = false;
        }
    });
});
