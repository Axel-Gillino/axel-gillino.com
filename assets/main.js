(function() {
    'use strict'
    
    $('.client').on('mouseenter', function (e) {
        $('.clients').css('background-color', $(e.target).data('bg-color'));
        $('.clients svg').css('fill', $(e.target).data('fg-color'))
    }).on('mouseout', function (e) {
        $('.clients').css('background-color', '#2E2E2E');
        $('.clients svg').css('fill', '#f9f9f9')
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