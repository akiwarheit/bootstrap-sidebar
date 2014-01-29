(function($) {
    $('.page-content, .side-menu').css({
        "min-height" : $(window).height() + "px"
    });

    $('.page-container').css({
        "min-height" : $(window).height() + "px"
    });

    $('.page-container').animate({
        width: [ "toggle", "swing" ],
        height: [ "toggle", "swing" ],
        opacity: "toggle"
    },{ 
        duration : 500
    });

    $('.side-menu > .items > li.has-sub.root-level > a').on('click', function () {
        $(this).parent().toggleClass('collapsed');
        $(this).parent().find('.sub-items').slideToggle('slow');
    });

    $('.logo').on('click', function() {
        $('li.root-level > a > span:nth-child(2)').fadeOut('slow');
        $('.page-container').toggleClass('sidebar-collapsed');
    });
})(jQuery);