	//手风琴效果
	var $guideSlider = $(".someMsg.clearfix").eq(0);
	
	$guideSlider.find(".msgPic .fl").hover(function() {
	$(this).addClass("active").siblings().removeClass("active");
	});
	
	
	
	
	var	index=$(this).index();
	
	
	//领先的技术与服务
	$(function(){
		$(".cn-box ul li").hover(function(){
			
			$(this).eq(index).addClass("active").siblings().removeClass("active");
			$(".cm-box").hide().eq($(this).index()).show();
		})
	})
	
	
	//解决企业发展“必经之路”
	$(function(){
		$("ul.develop-road-tab li").hover(function(){
			$(this).eq(index).addClass("active").siblings().removeClass("active");
			$(".develop-road-cont").hide().eq($(this).index()).show();
		})
	})
	
	
	
	//专业用户运营一体化服务
	$(function(){
		$("ul.profession-service-tab li").hover(function(){
			$(this).eq(index).addClass("active").siblings().removeClass(" active");
			$(".profession-service-cont").hide().eq($(this).index()).show();
		})
	})
