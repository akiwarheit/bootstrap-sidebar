(function($) {
    $('.side-menu .items li.has-sub.root-level a').on('click', function () {
        $(this).parent().find('.sub-items').slideToggle('slow');
    });
})(jQuery);