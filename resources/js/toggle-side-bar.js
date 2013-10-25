var Sidebar = {
    isToggled : false,
    el : $('.sidebar'),
    originalWidth : $('.sidebar').width() + "px",
    minimalWidth : $('.sidebar').width() * 0.62 + "px",
    content : $('.content'),
    container : $('.content > .container'),
    toggle : function(flag) {
        "use strict";
        this.isToggled = (typeof flag !== 'undefined') ? flag : !this.isToggled;
        this.adjust();
    },
    adjust : function () {
        if(this.isToggled) {
            this.el.css('width', '-=' + this.minimalWidth);
            this.content.css('padding-left', '-=' + this.minimalWidth);
            this.container.css('width','100%');
            $('.toggler > span:first').attr('class', 'glyphicon glyphicon-chevron-right');
            $('.toggle-hidden').hide();
        } else {
            this.el.css('width', this.originalWidth);
            this.content.css('padding-left', '+=' + this.minimalWidth);
            this.container.css('width','85%');
            $('.toggler > span:first').attr('class', 'glyphicon glyphicon-chevron-left');
            $('.toggle-hidden').show();
        }
    }
};