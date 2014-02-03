(function($) {
    $('.page-content, .side-menu').css({
        "min-height" : $(window).height()+100 + "px"
    });

    $('.page-container').css({
        "min-height" : $(window).height()+100 + "px"
    });

    $('.page-container').animate({
        width: [ "toggle", "swing" ],
        height: [ "toggle", "swing" ],
        opacity: "toggle"
    },{ 
        duration : 900
    });

    $('.side-menu > .items > li.has-sub.root-level > a').on('click', function () {
        $(this).parent().find('.sub-items').slideToggle('slow', function () {
            $(this).parent().toggleClass('collapsed');
        });
    });

    $('.logo').on('click', function() {
        $('.logo > a').toggle();
        if($('.page-container').hasClass('sidebar-collapsed')) {
            $('.page-container').animate({
                paddingLeft : '280px'
            });
        } else {
            $('.page-container').animate({
                paddingLeft : '65px'
            });
        }
        $('li.root-level > a > span:nth-child(2)').slideToggle('slow', function () {
            $('.page-container').toggleClass('sidebar-collapsed');
        });
    });
    
    window.onresize = function() {
        $('.page-content, .side-menu').css({
            "min-height" : $(window).height() + "px"
        });
        $('.page-container').css({
            "min-height" : $(window).height() + "px"
        });
    }
})(jQuery);

$(document).ready(function() {
    $('#employee-list').dataTable({
        "sDom": "<'row'<'col-xs-6'T><'col-xs-6'f>r>t<'row'<'col-xs-6'i><'col-xs-6'p>>",
        "aoColumnDefs": [{
            "bSortable": false, 
            "aTargets": [ 4,5 ]
        }, {
            "bSearchable": false, 
            "aTargets": [ 4,5 ]
        }]
    });  
} );