var appearLogo = function() {
			var x = $(window).scrollTop();

			if (x >= 62) {
			  $(".centered-logo").hide('slow');
			} else {
			  $(".centered-logo").show('slow');
		}

  	};

$( document ).ready( function(){

	appearLogo();

	$(".dropdown-button").dropdown();
	$('.button-collapse').sideNav();
	$('.parallax').parallax();
	$('.scrollspy').scrollSpy();
	$('.slider-mobile').slider({height:300, indicators: false});
	$('.slider').slider({height:500});
	$('#logo-container').sparkle({
		duration: 2000,
		fill: '#FFFFFF',
		stroke: "#FFFFFF",
		pause: 1000
	});

	$('#show-fuentes').click(function(){
		$('#ubicacion-jardin').hide('slow');
		$('#ubicacion-fuentes').show('slow');
	});
	$('#show-jardin').click(function(){
		$('#ubicacion-fuentes').hide('slow');
		$('#ubicacion-jardin').show('slow');
	});


	$(function() {

		$(window).scroll(function(){appearLogo()});

});

});