(function ($) {
	// Init Scrollspy
	$('body').scrollspy({
	target: '#mainNav'
	});
	$('body').scrollspy({
	target: '#mainNav2'
	});
	$("#mainNav2 a").on('click', function (event) {
	if (this.hash !== "") {
	event.preventDefault();
	
	const hash = this.hash;
	
	$('html, body').animate({
	scrollTop: $(hash).offset().top
	}, 800, function () {
	window.location.hash = hash;
	});
	}
	});
	
	// Smooth Scrolling
	$("#mainNav a").on('click', function (event) {
	if (this.hash !== "") {
	event.preventDefault();
	
	const hash = this.hash;
	
	$('html, body').animate({
	scrollTop: $(hash).offset().top
	}, 800, function () {
	window.location.hash = hash;
	});
	}
	});
	// Collapse Navbar
	var navbarCollapse = function () {
	if ($("#mainNav").offset().top > 100) {
	$("#mainNav").addClass("navbar-scrolled");
	} else {
	$("#mainNav").removeClass("navbar-scrolled");
	}
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);
	
	})(jQuery); // End of use strict


