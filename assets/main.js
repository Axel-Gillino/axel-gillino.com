(function() {
    'use strict'

    $('a').on('click', function(evt) {
        ga('send', 'event', 'Link', null, $(evt.target).attr('href'), null)
    });

    $('.slide')
        .on('mouseenter', function(e) { $(this).find('.slide-overlay').fadeIn(250) })  
        .on('mouseleave', function(e) { $(this).find('.slide-overlay').fadeOut(250) })

    var overlay = $('.overlay')
    var toggleOverlay = function () {
        if( overlay.hasClass('open')) {
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