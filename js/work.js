
$(document).ready(function () {
    let isAnimate = false;

    $(window).scroll(function () {
        let scrollPosition = $(window).scrollTop();
        let sectionOffset = $(".work").offset().top;
        let windowHeight = $(window).height();

      
        if (scrollPosition + windowHeight > sectionOffset &&
         scrollPosition < sectionOffset + $(".work").height()) {
            if (!isAnimate) {
                $(".workBtn").css({
                    opacity: 0,
                    position: "relative",
                    top: "-100px",
                }).animate({
                    opacity: 1,
                    top: 0,
                }, 2000);

                isAnimate = true;
            }
        } else {

            isAnimate = false;
        }
    });
});
