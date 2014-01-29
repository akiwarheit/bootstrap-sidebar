(function($) {
    $('.page-container').css({
        "min-height" : $(window).height() + "px"
    });

    $('.page-container').animate({
        width: [ "toggle", "linear" ],
        height: [ "toggle", "linear" ],
        opacity: "toggle"
    }, { 
        duration : 3000
    });

    $('.side-menu > .items > li.has-sub.root-level > a').on('click', function () {
        $(this).parent().toggleClass('collapsed');
        $(this).parent().find('.sub-items').slideToggle('slow');
    });
})(jQuery);