$(function () {


	// init
	var iw = $('.item-square').width();
	var dw = $(window).width();
	var dh = $(window).height();
	console.log("iw :" + iw);
	console.log("dh :" + dh);
	$('.item-square').height(iw);
	$('.item-rect').height(iw);
	$("div#13 ").css("background-image","url(./images/banks.jpg)");
	$("div#13 ").css("background-position","center");
	$("div#13 ").css("background-size","cover");
	

	$('.item-square, .item-rect').on('click', function () {
		$('.modal').show();
		$('body').addClass('modal-open')
	})

	var tranz = "translateZ("+iw/2+"px)";
	var tranz2 = "rotateX(-90deg) "+"translateZ("+(-iw/2)+"px)";

	$('.modal').on('click', function () {
		$('.modal').hide();
		$('.body').removeClass('modal-open');
	})

})

	console.log("tranz :"+ tranz ,tranz2);
	$(".flip").css("-webkit-transform", tranz);
	$(".flop").css("-webkit-transform", tranz2);
    /*-webkit-transform: rotateX(-90deg) translateZ(-60px);*/

    var fliped = Boolean(false);
	setInterval(rotate, 1000);

	function rotate(){
		if(!fliped){
			$("#r11").css("-webkit-transform","rotateX(90deg)");
			fliped = true;
		}
		else {
			$("#r11").css("-webkit-transform","rotateX(0deg)");
			fliped = false;
		}
	
	}

});
