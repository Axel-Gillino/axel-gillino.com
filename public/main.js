var data = {
	skills: [
		'Art Direction',
		'Branding & Identity',
		'Info Architecture',
		'Augmented Reality',
		'UI/UX Design',
		'Web & Mobile Design',
		'Digital Experiences',
		'Interaction Design',
		'Visual Design',
		'Design Systems',
		'Speaking',
		'Consulting'
	],

	awards: [
		'Awwwards',
		'Ingenious Awards',
		'FWA Mobile Awards',
		'Boomerang Awards',
		'FWA Awards',
		'ITAC Awards'
	],

	currentPosition: {
		position: "Lead Product Designers & Interactive Art Director",
		started: "Jul 2014",
		location: "Montreal, Canada",
		company: "Made Media",
		website: "getmade.co",
		description: "Rethinking the face-to-face salespeople & fundraisers solutions and the systems that manage them",
	},

	experience: [
		{
			position: "Product Design Consultant",
			duration: "Mar &middot; Jul 2014",
			location: "Berlin, Germany",
			company: "BookMyCoach",
			website: "bookmycoach.de",
		},
		{
			position: "Co-Founder & Product Designer",
			duration: "Apr 2013 · Jun 2014",
			location: "Montreal, Canada",
			company: "Barpass",
			website: "barpass.co",
		},
		{
			position: "Lead UX/UI Designer & Interactive Art Director",
			duration: "Jul 2012 · Mar 2014",
			location: "Montreal, Canada",
			company: "Merchlar",
			website: "merchlar.com",
		},
		{
			position: "Junior Interactive Art Director",
			duration: "Jan · May 2012",
			location: "Paris, France",
			company: "W & Cie",
			website: "wcie.fr",
		},
		{
			position: "Frontend Developer",
			duration: "Sep 2010 · Apr 2011",
			location: "Sydney, Australia",
			company: "Ostral",
			website: "ostral.com.au",			
		}
	],

	education: [
		{
			degree: "Masters in Media Engineering",
			school: "University of Montreal & Institut Ingemedia",
			description: "Acedemic exchange",
			location: "Montreal, Canada",
			duration: "2012 . 2013",
		},
		{
			degree: "Bachelors Degreee in Multimedia Design",
			school: "University of Montreal & Institut Ingemedia",
			location: "Montreal, Canada",
			duration: "2012 . 2013",
		},
		{
			degree: "Technical Degree in Computing & Communications",
			school: "University of Dijon",
			location: "Dijon, France",
			duration: "2008 . 2011",
		}
	]
};

(function($) {
	'use strict'

	$(window).scroll(function() {
		var yPos = -($(window).scrollTop() / 15)
		var bgPos = '50% '+ yPos + 'px'
		$('#landing').css('background-position', bgPos)

		var yPos2 = -($(window).scrollTop() / 10)
		var bgPos2 = '50% '+ yPos2 + 'px'		
		$('.container').css('background-position', bgPos2)
	})

	$('.grid-item').on('mouseenter', function(e) {
		$(this).find('.work-overlay').fadeIn(250)
	}).on('mouseleave', function(e) {
		$(this).find('.work-overlay').fadeOut(250)
	})

})(jQuery);