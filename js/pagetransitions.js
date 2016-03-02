var PageTransitions = (function() {

	$('.pt-page').on('animationend', function () {
		console.log('animationend....');
		$('.pt-page.red').addClass('pt-page-rotateCubeTopIn')
		$('.pt-page.red').addClass('pt-page-current')
	})

	// Render Animate
	var renderAnimate = function (selector) {
		var pages = $(selector).children('div.pt-page'),
		current = 0,
		isAnimating = false,
		endCurrPage = false,
		endNextPage = false,
		pagesCount = $pages.length;
	}
})();