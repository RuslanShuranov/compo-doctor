$(document).ready(function () {

    $('.services-mobile .services-box-btn').click((function () {
        var link = $(this).attr('href');
        if ($(link).is(':visible')) {
            $(link).hide('slow');
        } else {
            $(link).show('slow');
        }
    }));
})
;