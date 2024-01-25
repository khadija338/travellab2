(function ($) {
	"use strict";
	//Counter up
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	document.querySelector('.sidebar-button').addEventListener('click', () =>
    document.querySelector('.main-menu').classList.toggle('show-menu'));
    $('.menu-close-btn').on("click", function() {
        $('.main-menu').removeClass('show-menu');
    });
    $('.sidebar-button').on("click", function () {
        $(this).toggleClass('active');
    });




	jQuery('.dropdown-icon').on('click', function () {
		// alert()
		// $(this).next('.mob-submenu').slideToggle();
		jQuery(this).toggleClass('active').next('ul, .mega-menu').slideToggle();
		jQuery(this).parent().siblings().children('ul, .mega-menu').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});


	// sticky header
	window.addEventListener('scroll', function () {
		const header = document.querySelector('header.header-area');
		header.classList.toggle("sticky", window.scrollY > 0);
	});
	

	var swiper = new Swiper(".testimonial-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".home3-testimonial-next",
			prevEl: ".home3-testimonial-prev",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 3,
			},
		}

	});

	
	var swiper = new Swiper(".partnership-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		grabCursor: true,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4,
			},
		}
	});

	new WOW().init();

	
	
}(jQuery));