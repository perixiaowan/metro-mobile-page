$(function () {
	var wid = $('.item-square').width()
	console.log("wid :" + wid);
	$('.item-square').height(wid);
	$('.item-rect').height(wid);
	$("div#13 ").css("background-image","url(./images/banks.jpg)");
	$("div#13 ").css("background-position","center");
	$("div#13 ").css("background-size","cover");

	var tranz = "translateZ("+wid/2+"px)";
	var tranz2 = "rotateX(-90deg) "+"translateZ("+(-wid/2)+"px)";

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
