(function() {
    'use strict'
    
    $('.client').on('mouseenter', function (e) {
        var bgColor = $(e.target).data('bg-color');
        var fgColor = $(e.target).data('fg-color');
        $('.clients').css('background-color', bgColor);
        $(this).css('color', fgColor);
    });

    $('a').on('click', function(e) {
        ga('send', 'event', 'Link', null, $(e.target).attr('href'), null)
    });

    var overlay = $('.overlay');
    var toggleOverlay = function() {
        if (overlay.hasClass('open')) {
            overlay.removeClass('open');
            overlay.addClass('close');
            return
        }
        overlay.addClass('open');
        overlay.removeClass('close');
    }

    $('#trigger-overlay').on('click', toggleOverlay);
    $('.overlay-close').on('click', toggleOverlay);
})();