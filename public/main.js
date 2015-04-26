(function($) {

	$(window).scroll(function() {
		var yPos = -($(window).scrollTop() / 15); 
		var bgpos = '50% '+ yPos + 'px';
		$('#landing').css('background-position', bgpos );

		var yPos2 = -($(window).scrollTop() / 10); 
		var bgpos2 = '50% '+ yPos2 + 'px';
		$('.container').css('background-position', bgpos2 );
	}); 

	// var $workGrid = $('#work-grid')

	// $workGrid
	// 	.children('.grid-item')
	// 	.on('mouseenter', function(e) {
	// 		$(this).children('.work-overlay').fadeIn(250)
	// 	})		

	// $workGrid
	// 	.children('.grid-item')
	// 	$(e.target).on('mouseleave', function(e) {
	// 	$(e.target).fadeOut(250)
	// })

	$('.grid-item')
		.on('mouseenter', function(e) {
			$(this).find('.work-overlay').fadeIn(250)
		})
		.on('mouseleave', function(e) {
			$(this).find('.work-overlay').fadeOut(250)
		})

})(jQuery);