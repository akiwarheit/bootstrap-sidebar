(function($) {
    $('.page-container').animate({
        width: [ "toggle", "linear" ],
        height: [ "toggle", "linear" ],
        opacity: "toggle"
    }, { 
        duration : 3000,
        specialEasing: {
            width: "linear",
            height: "easeOutBounce"
        }
    });

    $('.side-menu > .items > li.has-sub.root-level > a').on('click', function () {
        $(this).parent().toggleClass('collapsed');
        $(this).parent().find('.sub-items').slideToggle('slow');
    });
})(jQuery);