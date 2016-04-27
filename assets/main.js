(function() {
    'use strict'
    
    $('.client').on('click', function (e) {
        $('.clients').css('background-color', $(e.target).data('bg-color'));
        $('.clients svg').css('fill', $(e.target).data('fg-color'));
        $('.clients .row-title').css('color', $(e.target).data('fg-color'));
    });

    $('html').on('click', function (e) {
        if ( ! $(e.target).hasClass('client') ) {
            $('.clients').css('background-color', '#2E2E2E');
            $('.clients svg').css('fill', '#f9f9f9');
            $('.clients .row-title').css('color', '#fff');
        }
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