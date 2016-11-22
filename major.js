(function(){
	//定义全局变量timer,实现导航栏连缀效果
		var timer=null;
		$("#navbar-collapse .nav").hover(function(){
			clearTimeout(timer);
			$(".nav-box").show();
		},function(){
			timer=setTimeout(function(){
				$(".nav-box").hide();
			},100);	
		});
		$(".nav-box").hover(function(){
			clearTimeout(timer);
		},function(){
			timer=setTimeout(function(){
				$(".nav-box").hide();
			},100);	
		});
		$("#navbar-collapse .nav li").hover(function(){
			var i=$(this).index();
			$(".nav-box .box").eq(i).stop(true,true).show(400).siblings().stop(true,true).hide(400);
		});//closest最靠近的元素,siblings兄弟元素
		$(".comm-tabs span").hover(function(){
			var $index=$(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$(this).closest(".box").find(".about-content .row").eq($index).show().siblings().hide();
		});
		$(".system .system-box").hover(function(){
			$(this).find(".slide").stop(true).fadeOut(500);
		},function(){
			$(this).find(".slide").stop(true).fadeIn(500);
		});
})()