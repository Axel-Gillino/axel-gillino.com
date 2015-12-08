;(function() {
    'use strict'

    $('.grid-item').on('mouseenter', function(e) {
        $(this).find('.work-overlay').fadeIn(250)
    }).on('mouseleave', function(e) {
        $(this).find('.work-overlay').fadeOut(250)
    })

    $('.slide').on('mouseenter', function(e) {
        $(this).find('.slide-overlay').fadeIn(250)
    }).on('mouseleave', function(e) {
        $(this).find('.slide-overlay').fadeOut(250)
    })

    var triggerBttn = $('#trigger-overlay'),
        overlay     = $('.overlay'),
        closeBttn   = $('.overlay-close');

    function toggleOverlay() {
        if( overlay.hasClass('open')) {
            overlay.removeClass('open');
            overlay.addClass('close');
        } else {
            overlay.addClass('open');
            overlay.removeClass('close');
        }
    }

    triggerBttn.on( 'click', toggleOverlay );
    closeBttn.on( 'click', toggleOverlay );
})();
