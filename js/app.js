$(function () {
	$(window).scrollTop(0);
	// Baidu API 'apikey':'c4d421473e859260c5a8867e0c163d12'
	var key = "c4d421473e859260c5a8867e0c163d12";
	// 天气情况
	var weather;
	var aqi;
	var zimi;


	$.ajax({
      url:"http://apis.baidu.com/apistore/weatherservice/weather?citypinyin=beijing",
      type:"GET",
      dataType:"json",
      headers:{'apikey':key},
      success: function(d){
          weather = d.retData;

          // 载入数据显示
          $('#tq-wind').text(weather.WD);
          $('#tq-temp').text(weather.temp + '℃');
          $('#tq-lhtmp').html(weather.l_tmp + '<br>' + weather.h_tmp);
          $('#tq-city').text(weather.city);
          // $('#tq-weather').text(weather.weather);
          // $('#tq-wind').text(weather.WD);
        }
    });
	// 空气质量
    $.ajax({
      url:"http://apis.baidu.com/apistore/aqiservice/aqi?city=北京",
      type:"GET",
      dataType:"json",
      headers:{'apikey':key},
      success: function(d){
          aqi = d.retData.aqi;
          var level = d.retData.level;
          // 载入数据显示
          $('#tq-api').text(aqi);
          $('#tq-level').text(level);
        }
    });
    // 猜一猜字谜
    // $.ajax({
    //   url:"http://apis.baidu.com/myml/c1c/c1c",
    //   type:"GET",
    //   dataType:"json",
    //   headers:{'apikey':key},
    //   success: function(d){
    //   	zimi = d;
    //       var ans = d.Answer;
    //       var tit = d.Title;
    //       $('#zimi-wt').text(tit);
    //       $('#zimi-da').text(ans);
    //     }
    // });





	// init
	var iw = $('.item-square').width();		// item width
	var dw = $(window).width();				// device width
	var dh = $(window).height();			// device height

	$('.item-square').height(iw);
	$('.item-rect').height(iw);



	var $home    = $('#home');
	// $home.css("width",dw)
	// $("body").css("width",dw);
	var $article = $('#article');
	

//进入正文
	$('.item-article').on('click', function () {

		var id = $(this).attr('id');
		// if (id[0] !=='a') return false;



		if (id === 'z-63') {
			// _renderZM();
		} else if (id === 'a-01') {
			_renderTQ();
		} else {
			_render(id);	
		}
		



		// $article.show();
		$article.fadeIn("slow");
		$home.hide();
		$(window).scrollTop(0);

		
		clearInterval(b);
		$('#r51').removeClass('current');
		$('#r52').removeClass('current');

		$('#r51').css('z-index',99);
		$('#r52').css('z-index',98);

		f = 0;

		clearInterval(go);
		$('#r11').removeClass('current');
		$('#r12').removeClass('current');
		$('#r11').css('z-index',99);
		$('#r12').css('z-index',98);
		weatherCardStat = 0;
	});

	$('.item-special').on('click', function(){
		console.log("item-special clicked!");
	});


	//返回主页
	$('#back').on('click', function () {

		$article.fadeOut("slow");

		$home.fadeIn("slow");

		$(window).scrollTop(0);

		weatherPlay();
		a();
	});


//CUBE翻转动画  对象是box
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


//SLIDE滑动动画  对象是card
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

//FADE滑动动画  对象是具体id
	function fade(el){
		el.on("webkitTransitionEnd", transend);
		el.addClass('current');
		function transend (){
			el.off("webkitTransitionEnd", transend);
			var index = $(this).css("z-index");
			$(this).css("z-index",index-2);
			$(this).removeClass('current');
			// console.log(this);
		}
	}
	var weatherCardStat = 0;
	var go;
	var weatherPlay = function(){
		go = setInterval(function(){
			if(weatherCardStat ===0){
				weatherCardStat = 1;
				fade($('#r11'));
			}else if(weatherCardStat===1){
				weatherCardStat = 0;
				fade($('#r12'));
			}

		},3000);
	}
	weatherPlay();


	var f = 0;
	var b;
	var a = function(){
		
		b =	setInterval(function(){
			if(f===0){
				f++;
				fade($('#r51'));
			}else if(f===1){
				f=0;
				fade($('#r52'));
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

	var _renderTQ = function(){
		var html = '';
		html = '<h1>北京</h1><p>' + weather.weather +'<br>'+weather.WD+'<br>'+weather.WS +'</p><p>' 
		+ '空气质量指数：'+aqi +'</p><p>'
		+ '现在温度：'+weather.temp+'℃' + '<br>'
		+ '最高温度：'+weather.h_tmp+'℃' + '<br>'
		+ '最底温度：'+weather.l_tmp+'℃' + '</p><br><br>';
		$('.article-content').html(html);
	};

	// var _renderZM = function(){

	// 	var html = '';
	// 	html = '<h1>字谜</h1><br><p>' +'谜面：'+ zimi.Title + '<br><br></p><p>' +'谜底：'+ zimi.Answer + '<br></p><br><br>';
	// 	$('.article-content').html(html);
	// };

	// end of app.js
});
