$(function () {


	// init
	var iw = $('.item-square').width();		// item width
	var dw = $(window).width();				// device width
	var dh = $(window).height();			// device height

	$('.item-square').height(iw);
	$('.item-rect').height(iw);
	$("div#r13 ").css("background-image","url(./images/banks.jpg)");
	$("div#r13 ").css("background-position","center");
	$("div#r13 ").css("background-size","cover");
	

	var $home    = $('#home');
	var $article = $('#article');
	$('.item-square, .item-rect').on('click', function () {
		$home.hide();
		$article.show();
		var id = $(this).attr('id');
		console.log(id)
	});
	$('#back').on('click', function () {
		$home.show();
		$article.hide();
	});



	var ori = iw/2+"px "+iw/2+"px "+(-iw/2)+"px" ;
	$(".box").css("-webkit-transform-origin", ori);

/*-webkit-transform-origin: 60px 60px -60px;*/
    var fliped = Boolean(false);
	setInterval(rotate, 2000);

	function rotate(){
		if(!fliped){
			$(".box").css("-webkit-transform","rotateX(90deg)");
			fliped = true;
		}
		else {
			$(".box").css("-webkit-transform","rotateX(0deg)");
			fliped = false;
		}
	
	}


	//-webkit-transform: translateY(-180px);
	var transup = "translateY("+(-iw)+"px)";
	var transdown = "translateY(0px)";

	//$(".card").css("-webkit-transform",trans);
	var slided = Boolean(false);
	setInterval(slides, 2100);

	function slides(){
		if(!slided){
			$(".card").css("-webkit-transform",transup);
			slided = true;
		}
		else {
			$(".card").css("-webkit-transform",transdown);
			slided = false;
		}
	
	}



	// end of app.js
});
