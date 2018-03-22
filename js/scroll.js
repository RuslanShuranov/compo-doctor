$(document).ready(function () {
    $('a').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html').animate({scrollTop: destination}, 1000);
    });
});

$(function () {
    $.fn.scrollToTop = function () {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow");
        var scrollDiv = $(this);
        $(window).scroll(function () {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow");
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function () {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});

$(function () {
    $("#go-top").scrollToTop();
});