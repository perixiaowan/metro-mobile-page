$(function () {
	$(window).scrollTop(0);
	// Baidu API 'apikey':'c4d421473e859260c5a8867e0c163d12'
	var key = "c4d421473e859260c5a8867e0c163d12";
	// 天气情况
	$.ajax({
      url:"http://apis.baidu.com/apistore/weatherservice/weather?citypinyin=beijing",
      type:"GET",
      dataType:"json",
      headers:{'apikey':key},
      success: function(d){
          var weather = JSON.stringify(d);
          var cit = d.retData.city;
          var wea = d.retData.weather;

          console.log("data:"+weather);
          console.log("city:"+cit);
        }
    });
	// 空气质量
    $.ajax({
      url:"http://apis.baidu.com/apistore/aqiservice/aqi?city=北京",
      type:"GET",
      dataType:"json",
      headers:{'apikey':key},
      success: function(d){
          var pm = JSON.stringify(d);
          var aqi = d.retData.aqi;
          var wea = d.retData.weather;
          
          console.log("data:"+pm);
          console.log("city:"+aqi);
        }
    });
    // 猜一猜字谜
    $.ajax({
      url:"http://apis.baidu.com/myml/c1c/c1c",
      type:"GET",
      dataType:"json",
      headers:{'apikey':key},
      success: function(d){
          var pm = JSON.stringify(d);
          var ans = d.Answer;
          var tit = d.Title;
          
          console.log("data:"+ans);
          console.log("city:"+tit);
        }
    });





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
	// $home.css("width",dw)
	// $("body").css("width",dw);
	var $article = $('#article');
	

//进入正文
	$('.item-square, .item-rect').on('click', function () {

		$article.show();
		$article.css("opacity",1);
		$article.css("width",dw);
		var id = $(this).attr('id');
		console.log(id);

		if (id.match(/^a/)) {
			_render(id);
		}
		$('.screen').on("webkitTransitionEnd", function(){
			$home.hide();
			$('.screen').off("webkitTransitionEnd");
			
		});
	
		
		clearInterval(b);
		$('#r22').removeClass('current');
		$('#r23').removeClass('current');
		$('#r24').removeClass('current');
		$('#r25').removeClass('current');
		$('#r22').css('z-index',99);
		$('#r23').css('z-index',98);
		$('#r24').css('z-index',97);
		$('#r25').css('z-index',96);
		f = 1;

		var transLeft = "translateX("+(-dw)+"px)";

		$(".screen").css("-webkit-transform",transLeft);
	});


	//返回主页
	$('#back').on('click', function () {
		// $home.show();
		// $article.hide();
		
		$home.show();

		// $(window).scrollTop(0);
		$(".screen").css("-webkit-transform","translateX(0px)");
		$('.screen').on("webkitTransitionEnd", function(){
			$article.hide();
			$('.screen').off("webkitTransitionEnd");
			
		});

		a();
	});


//CUBE翻转动画
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


//SLIDE滑动动画
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

//FADE滑动动画
	function fade(el){
		el.on("webkitTransitionEnd", transend);
		el.addClass('current');
		function transend (){
			el.off("webkitTransitionEnd", transend);
			var index = $(this).css("z-index");
			$(this).css("z-index",index-4);
			$(this).removeClass('current');
			console.log(this);
		}
	}
	var f = 1;
	var b;
	var a = function(){
		
		b =	setInterval(function(){
			if(f===1){
				f++;
				fade($('#r22'));
			}else if(f===2){
				f++;
				fade($('#r23'));
			}else if(f===3){
				f++;
				fade($('#r24'));
			}else if(f===4){
				f=1;
				fade($('#r25'));
			}
			
		},2000);
	}
	a();
	
	// load news from html files
	var _render = function (id) {
		var url = 'html/' + id + '.html';
		$.get(url, function (data) {
			console.log(data);
			$('.article-content').html(data);
		}).fail(function () {
			$('.article-content').html('<h1>此页面尚未完成。</h1>');
		});
	};

	$('#article').css("left", dw);
	$('#article').css("width", dw);


	// end of app.js
});
