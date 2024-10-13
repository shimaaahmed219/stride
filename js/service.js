$(document).ready(function () {
    let hasAnimated = false;

    $(window).scroll(function () {
        let scrollPosition = $(window).scrollTop();
        let sectionOffset = $(".servise").offset().top;
        let windowHeight = $(window).height();
        let sectionHeight = $(".servise").outerHeight();

      
        if (
            scrollPosition + windowHeight > sectionOffset &&
            scrollPosition < sectionOffset + sectionHeight &&
            !hasAnimated
        ) {
            // تشغيل الأنيميشن
            $(".parag").css({
                opacity: 0,
                top: "-100px",
                position: "relative",
            }).animate(
                {
                    opacity: 1,
                    top: "0",
                },
                2000
            );

            $(".box").css({
                opacity: 0,
                bottom: "-100px",
                position: "relative",
            }).animate(
                {
                    opacity: 1,
                    bottom: "0",
                },
                2000
            );

            hasAnimated = true; 
        } else if (
            (scrollPosition + windowHeight < sectionOffset ||
                scrollPosition > sectionOffset + sectionHeight) &&
            hasAnimated
        ) {
           
            hasAnimated = false;
        }
    });
});
