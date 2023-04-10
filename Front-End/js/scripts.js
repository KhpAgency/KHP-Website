(function ($) {
	'use strict';


	$(window).on('load', function () {



		/*-------------------------------------------------------------------------------
		  Wow.js
		-------------------------------------------------------------------------------*/



		$('.loader').fadeOut(1000);
		var wow = new WOW({
			offset: 150,
			mobile: false
		}
		);

		wow.init();
	});



	/*-------------------------------------------------------------------------------
	   Animsition Loader
	-------------------------------------------------------------------------------*/



	$(".animsition").animsition({
		inClass: 'fade-in',
		outClass: 'fade-out',
		inDuration: 1000,
		outDuration: 700,
		linkElement: 'a.project-box',
		// e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
		loading: true,
		loadingParentElement: 'body', //animsition wrapper element
		loadingClass: 'spinner',
		loadingInner: '<div class="double-bounce1"></div><div class="double-bounce2"></div>', // e.g '<img src="loading.svg" />'
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: ['animation-duration', '-webkit-animation-duration'],
		// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
		// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
		overlay: false,
		overlayClass: 'animsition-overlay-slide',
		overlayParentElement: 'body',
		transition: function (url) { window.location.href = url; }
	});



	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-with-zoom',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


	/*-------------------------------------------------------------------------------
	  Menu
	-------------------------------------------------------------------------------*/



	$('.navbar-toggle').on('click', function () {
		$('body').removeClass('menu-is-closed').addClass('menu-is-opened');
	});

	$('.close-menu, .click-capture, .menu-list li a').on('click', function () {
		$('body').removeClass('menu-is-opened').addClass('menu-is-closed');
		$('.menu-list ul').slideUp(300);
	});

	$('.menu-list li a').on('click', function () {
		$('.menu-list li').removeClass('active');
		$(this).closest('li').addClass('active');

	});


	$('.col-resume').on('mouseover', function () {
		$('.section-bg.mask').addClass('hide');
	});

	$('.col-resume').on('mouseleave', function () {
		$('.section-bg.mask').removeClass('hide');
	});


	/*-------------------------------------------------------------------------------
	  Owl Carousel
	-------------------------------------------------------------------------------*/


	if ($('.owl-carousel').length > 0) {

		$(".review-carousel").owlCarousel({
			responsive: {
				0: {
					items: 1
				},
				720: {
					items: 1,

				},
				1280: {
					items: 1
				}
			},
			responsiveRefreshRate: 0,
			nav: false,
			navText: [],

			dots: true
		});

	}




	/*-------------------------------------------------------------------------------
	  Full screen sections 
	-------------------------------------------------------------------------------*/


	function navbarFullpage() {
		if ($('.pp-section.active').scrollTop() > 0) {
			$('.navbar-fullpage').addClass('navbar-fixed');
		}
		else {
			$('.navbar-fullpage').removeClass('navbar-fixed');
		}
	}

	navbarFullpage();

	function navbar() {
		$(window).scroll(function () {
			if ($(window).scrollTop() > 0) {
				$('.navbar').addClass('navbar-fixed');
			}
			else {
				$('.navbar').removeClass('navbar-fixed');
			}
		});

	}

	navbar();

	if ($('.pagepiling').length > 0) {
		$('.pagepiling').pagepiling({
			scrollingSpeed: 280,
			loopBottom: true,
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
			afterLoad: function (anchorLink, index) {
				navbarFullpage();

			}
		});

	}

	$('.pp-scrollable').on('scroll', function () {
		var scrollTop = $(this).scrollTop();
		if (scrollTop > 0) {
			$('.navbar-fullpage').addClass('navbar-fixed');
		}
		else {
			$('.navbar-fullpage').removeClass('navbar-fixed');
		}
	});



	/*------------------------------------------------------------------------------
	   Scroller navigation
	/-------------------------------------------------------------------------------*/



	$('#pp-nav').remove().appendTo('.animsition').addClass('white right-boxed hidden-xs');

	$('.pp-nav-up').on('click', function () {
		$.fn.pagepiling.moveSectionUp();
	});

	$('.pp-nav-down').on('click', function () {
		$.fn.pagepiling.moveSectionDown();
	});




	/*-------------------------------------------------------------------------------
	  Change bacgkround on project section
	-------------------------------------------------------------------------------*/



	$('.project-row a').on('mouseover', function () {
		var index = $('.project-row a').index(this)
		$('.project-row a').removeClass('active');
		$(this).addClass('active');
		$('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
	});



	/*-------------------------------------------------------------------------------
	  Ajax Forms
	-------------------------------------------------------------------------------*/



	if ($('.js-form').length) {
		$('.js-form').each(function () {
			$(this).validate({
				errorClass: 'error',
				submitHandler: function (form) {
					$.ajax({
						type: "POST",
						url: "mail.php",
						data: $(form).serialize(),
						success: function () {
							$('.form-group-message').show();
							$('#error').hide();
							$('#success').show();
						},

						error: function () {
							$('.form-group-message').show();
							$('#success').hide();
							$('#error').show();
						}
					});
				}
			});
		});
	}





})(jQuery);


function blacklogo() {
	document.getElementById("logo1").src = "images/blacklogo.png";
}

function whitelogo() {
	document.getElementById("logo1").src = "images/whitelogo2.png";
}



function whiteburger() {
	// Get the elements by their IDs and assign them to variables
	const brgr1 = document.getElementById("brgr1");
	const brgr2 = document.getElementById("brgr2");
	const brgr3 = document.getElementById("brgr3");

	// Change the background color of the elements
	brgr1.style.backgroundColor = "white";
	brgr2.style.backgroundColor = "white";
	brgr3.style.backgroundColor = "white";
}

function blackburger() {
	// Get the element by its ID
	const brgr1 = document.getElementById("brgr1");
	const brgr2 = document.getElementById("brgr2");
	const brgr3 = document.getElementById("brgr3");

	// Change the background color
	brgr1.style.backgroundColor = "black";
	brgr2.style.backgroundColor = "black";
	brgr3.style.backgroundColor = "black";
}

function blacksocial() {
	document.getElementById("social1").src = "images/i1-01.png";
	document.getElementById("social2").src = "images/i2-01.png";
	document.getElementById("social3").src = "images/i3-01.png";
	document.getElementById("social4").src = "images/i4-01.png";
	document.getElementById("social5").src = "images/i5-01.png";
	document.getElementById("social6").src = "images/i6-01.png";
	// document.getElementById("social7").src = "images/i7-01.png";
	document.getElementById("social8").src = "images/i8-01.png";
	document.getElementById("social9").src = "images/youtube-colored.png";
}

function whitesocial() {
	document.getElementById("social1").src = "images/iw1-01.png";
	document.getElementById("social2").src = "images/iw2-01.png";
	document.getElementById("social3").src = "images/iw3-01.png";
	document.getElementById("social4").src = "images/iw4-01.png";
	document.getElementById("social5").src = "images/iw5-01.png";
	document.getElementById("social6").src = "images/iw6-01.png";
	// document.getElementById("social7").src = "images/iw7-01.png";
	document.getElementById("social8").src = "images/iw8-01.png";
	document.getElementById("social9").src = "images/youtube.png";
}

// api
function showapi1(){
	const divapi1 = document.getElementById("divapi1");
	const divapi2 = document.getElementById("divapi2");

	divapi1.style.display="block";
	divapi2.style.display="none";
}

function showapi2(){
	const divapi1 = document.getElementById("divapi1");
	const divapi2 = document.getElementById("divapi2");
	divapi1.style.display="none";
	divapi2.style.display="block";
}
// bge
function showbge1(){
	const divbge1 = document.getElementById("divbge1");
	const divbge2 = document.getElementById("divbge2");

	divbge1.style.display="block";
	divbge2.style.display="none";
}

function showbge2(){
	const divbge1 = document.getElementById("divbge1");
	const divbge2 = document.getElementById("divbge2");
	divbge1.style.display="none";
	divbge2.style.display="block";
}
// nerva
function shownerva1(){
	const divnerva1 = document.getElementById("divnerva1");
	const divnerva2 = document.getElementById("divnerva2");

	divnerva1.style.display="block";
	divnerva2.style.display="none";
}

function shownerva2(){
	const divnerva1 = document.getElementById("divnerva1");
	const divnerva2 = document.getElementById("divnerva2");

	divnerva1.style.display="none";
	divnerva2.style.display="block";
}
// peacock
function showpeacock1(){
	const divpeacock1 = document.getElementById("divpeacock1");
	const divpeacock2 = document.getElementById("divpeacock2");

	divpeacock1.style.display="block";
	divpeacock2.style.display="none";
}

function showpeacock2(){
	const divpeacock1 = document.getElementById("divpeacock1");
	const divpeacock2 = document.getElementById("divpeacock2");

	divpeacock1.style.display="none";
	divpeacock2.style.display="block";
}
// nutrigo
function shownutrigo1(){
	const divnutri1 = document.getElementById("divnutri1");
	const divnutri2 = document.getElementById("divnutri2");

	divnutri1.style.display="block";
	divnutri2.style.display="none";
}

function shownutrigo2(){
	const divnutri1 = document.getElementById("divnutri1");
	const divnutri2 = document.getElementById("divnutri2");

	divnutri1.style.display="none";
	divnutri2.style.display="block";
}
// kmbf
function showkmbf1(){
	const divkmbf1 = document.getElementById("divkmbf1");
	const divkmbf2 = document.getElementById("divkmbf2");

	divkmbf1.style.display="block";
	divkmbf2.style.display="none";
}

function showkmbf2(){
	const divkmbf1 = document.getElementById("divkmbf1");
	const divkmbf2 = document.getElementById("divkmbf2");

	divkmbf1.style.display="none";
	divkmbf2.style.display="block";
}
// drdonia
function showdonia1(){
	const divdonia1 = document.getElementById("divdonia1");
	const divdonia2 = document.getElementById("divdonia2");

	divdonia1.style.display="block";
	divdonia2.style.display="none";
}

function showdonia2(){
	const divdonia1 = document.getElementById("divdonia1");
	const divdonia2 = document.getElementById("divdonia2");

	divdonia1.style.display="none";
	divdonia2.style.display="block";
}
// galina
function showgalina1(){
	const divgalina1 = document.getElementById("divgalina1");
	const divgalina2 = document.getElementById("divgalina2");

	divgalina1.style.display="block";
	divgalina2.style.display="none";
}

function showgalina2(){
	const divgalina1 = document.getElementById("divgalina1");
	const divgalina2 = document.getElementById("divgalina2");

	divgalina1.style.display="none";
	divgalina2.style.display="block";
}
