(function() {
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

    var triggerBtn = $('#trigger-overlay'),
        overlay    = $('.overlay'),
        closeBtn   = $('.overlay-close');

    function toggleOverlay() {
        if( overlay.hasClass('open')) {
            overlay.removeClass('open');
            overlay.addClass('close');
        } else {
            overlay.addClass('open');
            overlay.removeClass('close');
        }
    }

    triggerBtn.on( 'click', toggleOverlay );
    closeBtn.on( 'click', toggleOverlay );
})();
