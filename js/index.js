$(document).ready(function () {
    $('.title').animate({
        left: '0',
        opacity: '1',
        marginTop: '50px',


    }, 1000);

    $('.image').animate({
        right: '0',
        opacity: '1',
        width: '65%',
        height: '650px',

    }, 1000);
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) {
            $('.nav').css({
                'background-color': '#ffffff',
                'box-shadow': '0px 2rem  2rem rgba(115, 112, 112, 0.15)'

            });
        } else {
            $('.nav').css({
                'background-color': 'transparent',
                'box-shadow': 'none'
            });
        }
    });
});



$(document).ready(function () {

    $(".icon").click(function () {
        $(".dropList").slideToggle(2000)

    });

});

$(document).ready(function () {

    $(".closeIcon").click(function () {
        $(".dropList").slideUp(2000)

    });

});

$(document).ready(function () {
    $(".list a").click(function (event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});
