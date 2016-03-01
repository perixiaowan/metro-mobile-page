$(function () {
	// init
	var iw = $('.item-square').width();
	var dw = $(window).width();
	var dh = $(window).height();
	console.log("iw :" + iw);
	console.log("dh :" + dh);
	$('.item-square').height(iw);
	$('.item-rect').height(iw);

	

	$('.item-square, .item-rect').on('click', function () {
		$('.modal').show();
		$('body').addClass('modal-open')
	})

})


