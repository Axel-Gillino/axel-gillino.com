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

	var SkillCell = function(data) {
		this.data = data || {}
		this.tpl  = '<div class="skill-name"></div>'
		this.el

		this.destroy = function() {
			this.el.remove()
		}

		this.render = function() {
			this.el = $(this.tpl)
			this.el.text = data.skill
			return this.el
		}
	}

	var SkillsColumn = function(children) {
		this.children = children || []
		this.tpl  	  = '<div class="skill-col"></div>'
		this.el		  = $(this.tpl)

		this.append = function(el) {
			this.el.append(el)
			return this
		}

		this.empty = function() {
			this.children = []
			return this
		}

		this.destroy = function() {
			this.el.remove()
		}

		this.render = function() {
			this.el = $(this.tpl)	
			return this.el
		}
	}

	// var cell = new SkillCell({ skill: 'asdf' })
	// console.log(cell)
	// cell.render()
	// var col = new SkillsColumn()
	// console.log(col)
	// col.render()
	// var renderedCol = col.append( cell.render() )
	// console.log(renderedCol)
	// $('#skills-grid').append(col.render())


	$(window).scroll(function() {
		var yPos = -($(window).scrollTop() / 15)
		var bgpos = '50% '+ yPos + 'px'
		$('#landing').css('background-position', bgpos)

		var yPos2 = -($(window).scrollTop() / 10)
		var bgpos2 = '50% '+ yPos2 + 'px'
		$('.container').css('background-position', bgpos2)
	})

	$('.grid-item').on('mouseenter', function(e) {
		$(this).find('.work-overlay').fadeIn(250)
	}).on('mouseleave', function(e) {
		$(this).find('.work-overlay').fadeOut(250)
	})

})(jQuery);