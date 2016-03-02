$(function () {
	// init
	var iw = $('.item-square').width();		// item width
	var dw = $(window).width();				// device width
	var dh = $(window).height();			// device height

	$('.item-square').height(iw);
	$('.item-rect').height(iw);

	var $home    = $('#home');
	var $article = $('#article');
	$('.item-square, .item-rect').on('click', function () {
		$home.hide();
		$article.show();
	})

	$('#back').on('click', function () {
		$home.show();
		$article.hide();
	})


});