(function($) {

	$(window).on('scroll', function() {
		console.log('scroll')
	})

	$(window).scroll(function() {
		var yPos = -($(window).scrollTop() / 15); 
		var bgpos = '50% '+ yPos + 'px';
		$('#landing').css('background-position', bgpos );

		var yPos2 = -($(window).scrollTop() / 10); 
		var bgpos2 = '50% '+ yPos2 + 'px';
		$('.container').css('background-position', bgpos2 );
	}); 

})(jQuery);