$(document).ready(function () {
	$(".carousel__inner").slick({
		speed: 1000,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icon/right.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false,
				},
			},
		],
	});
});
