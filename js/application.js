function openpage(page) {   
	window.location.href=page;
}

var body = $('body');

//NAVBAR-OVERFOLLOW========================
$(".nav-mobile-button").click(function () {
	$('html').addClass('add');
});
$(".btn-close").click(function () {
	$('html').removeClass('add');
});
$(document).ready(function(){
	var $owl = $('.loop');
	$('.owl-carousel').owlCarousel({
		autoplay: false,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		autoplaySpeed: 800,
		center: true,
		items: 1.7,
		
		loop: true,
		dots:false,
		margin: 15,
	})
	
  });
///APPS================
var APP = {
	isMobile: null,
	windowWidth: null
};
// var html = document.querySelector("html");
// html.classList.add("add");


$(window).on('scroll', function (event) {
	var scroll = $(window).scrollTop();

	if (scroll < 50) {
		$("header").removeClass("isFixed");
	} else {
		$("header").addClass("isFixed");
	}
});

window.addEventListener("load", function () {

	// Gsap 3 version
	const preloadDot = $(".preloader__container__preload__dot");
	const tl = gsap.timeline({ repeat: 3 });
	tl
		.to(preloadDot, 0.3, { delay: 0.3, scale: 1.4, stagger: 0.1 })
		.to(preloadDot, 0.3, {
			scale: 1, stagger: {
				amount: 0.35,
				from: "start"
			}
		});

	let counter = 0;
	const loaderTimer = setInterval(function () {
		counter++;

		$(".preloader__container__percent").text(counter + "%");
		if (counter == 100) {
			clearInterval(loaderTimer);
			gsap.to(".preloader", 0.3, { delay: 0.5, y: "-100%" });
			$("html").removeClass("add");
		}
	}, 10);

});
//FILTER========================
APP.filter = function () {
	$(window).on('load', function () {
		var filterItem = $('.filter__item');
		var filterItemAll = $('.filter__item[data-filter="*"]');
		var filterActiveClass = 'filter__item--active';

		var grid = $('.__js_projects-grid').isotope({
			itemSelector: '.__js_masonry-item',
			layoutMode: 'packery',
			getSortData: {
				order: '[data-order]',
			},
			sortBy: 'order',
			//sortAscending: false,
			packery: {
				gutter: 0
			},
		});

		var grid2 = $('.__js_news-grid').isotope({
			itemSelector: '.__js_masonry-item',
			layoutMode: 'packery',
			packery: {
				gutter: 0
			},
		});

		setTimeout(function () {
			$('.masonry').isotope({
				itemSelector: '.masonry-item',
				layoutMode: 'packery'
			});
		}, 100);

		filterItem.on('click', function () {
			var filterValue = $(this).attr('data-filter');

			$(this).addClass(filterActiveClass).siblings().removeClass(filterActiveClass);
			grid.isotope({ filter: filterValue });
			grid2.isotope({ filter: filterValue });

			if ($('.__js_news-list-filter') && $('.__js_news-list-filter').length > 0) {
				var destination = $('.__js_news-list-filter').offset().top - 200;

				$('html').animate({ scrollTop: destination }, 1100); //1100 - скорость
			}
		});
	});
}

var swiperWorkWork33 = new Swiper('.partners ._js_carosuel',{
	slidesPerView: 1,
	spaceBetween: 5,
	autoPlaySpeed:1000,
	autoplay:true,
	speed: 1000,
	dots:true,
	clickable: true,
	grabCursor: true,

	loop: true,


	navigation: {
		el: '.partners .swiper-pagination',
		clickable: true,
		nextEl: ".btn-next",
	},
	
});

//FOOTER FIXED========================
$(window).on('load', function () {
	var footer = $('.__js_fixed-footer');
	var footerParent = footer.parent();
	var footerHeight = footer.innerHeight();

	if (footer.length !== 0) {
		if (footerHeight <= $(window).height()) {
			var leftValue = footerParent.css('padding-left');
			footer.css({ 'position': 'fixed', 'left': leftValue, 'right': '0', 'bottom': '0' });
			body.css('padding-bottom', footerHeight);
		} else {
			body.css('padding-bottom', '0');
			footer.removeAttr('style');
		}

		$(window).on('resize', function () {
			footerHeight = footer.innerHeight();

			if (footerHeight <= $(window).height()) {
				leftValue = footerParent.css('padding-left');
				footer.css({ 'position': 'fixed', 'left': leftValue, 'right': '0', 'bottom': '0' });
				body.css('padding-bottom', footerHeight);
			} else {
				body.css('padding-bottom', '0');
				footer.removeAttr('style');
			}
		});
	}
});

