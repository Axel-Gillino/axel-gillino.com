;(function() {
    'use strict'

    //$('.dropdown-content.education').slideUp()
    $('.dropdown-content').slideUp()
    $('.row-title.education > .js-toggle').slideUp()

    $(window).scroll(function() {
        var yPosLanding    = -($(window).scrollTop() / 15),
            bgPosLanding   = '50% '+ yPosLanding + 'px',
            yPosContainer  = -($(window).scrollTop() / 10),
            bgPosContainer = '50% '+ yPosContainer + 'px'

        $('#landing').css(  'background-position', bgPosLanding  )
        $('.container').css('background-position', bgPosContainer)
    })

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


    // $('.slide').on('mouseenter', function(e) {
    //     $(this).find('.slide-overlay').fadeIn(250)
    // }).on('mouseleave', function(e) {
    //     $(this).find('.slide-overlay').fadeOut(250)
    // })


    $('.dropdown > .dropdown-title').click(function(e) {
        var $content = $(this).siblings('.dropdown-content')
        $content.is(':visible')
            ? $content.slideUp()
            : $content.slideDown(100, function() {
                $content.trigger('slid_up')
            })
    })

    $('.dropdown.experience > .dropdown-title').click(function(e) {
        var $content = $(this).siblings('.dropdown-content')
        $content.is(':visible')
            ? $(this).css('border-bottom', '1px solid black')
            : $(this).css('border-bottom', 'none')
    })

    $('.dropdown-title.education').click(function(e) {
        var $jsToggle = $('.row-title.education > .js-toggle')
        $jsToggle.is(':visible')
            ? $jsToggle.slideUp(550)
            : $jsToggle.slideDown(100)
    });


})();
