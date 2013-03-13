/**
 * 返回顶部jQuery插件 back-to-top.js
 * 
 * @author lisanlai
 * @email li.sanlai@ustcinfo.com
 * @date 2012-12-17 下午3:49:40
 */

BackToTop = function(){
	
	/**
	 * 空白图片
	 */
	BLANK_IMAGE_URL = 'resources/public/BackTop/blank.png';
	
	/**
	 * 显示图片
	 */
	BACK_IMAGE_URL = 'resources/public/BackTop/back_to_top.png';
	
	userAgent = navigator.userAgent.toLowerCase();
	
	check = function(regex){
		return regex.test(userAgent);
	};
	
	version = function (is, regex) {
		var m;
		return (is && (m = regex.exec(userAgent))) ? parseFloat(m[1]) : 0;
	};
	
	isStrict = document.compatMode == "CSS1Compat";
	docMode = document.documentMode;
	isOpera = check(/opera/);
	isIE = !isOpera && check(/msie/);
	isIE6 = isIE && check(/msie 6/);
	isIE7 = isIE &&((check(/msie 7/) && docMode != 8 && docMode != 9) || docMode == 7);
	isIE8 = isIE &&((check(/msie 8/) && docMode != 7 && docMode != 9) || docMode == 8);
	isIE9 = isIE &&((check(/msie 9/) && docMode != 7 && docMode != 8) || docMode == 9);
	
	return {
		
		//初始化回顶部div
		initBackTopDIV : function(){
			
			//ie6要隐藏纵向滚动条
			var html = '<div id="backTopDiv" style="display: none;"><img id="backToTopImage" title="返回顶部" src="'+BLANK_IMAGE_URL+'" style="width:50px;height:50px; cursor: pointer;background: url(\''+BACK_IMAGE_URL+'\') no-repeat;border: none;"/></div>';
			$('body').append(html);
			
			var loc={right:"10px",bottom:"10px"};
			
			$('#backTopDiv').css('display','none').css("z-index","9999").css(loc).css("position","fixed");
			if(isIE6){
				if(loc.right!=undefined){
					//有值时就不设置，无值时要加18px已修正层位置
					if($('#backTopDiv').css("right")==null || $('#backTopDiv').css("right")==""){
						$('#backTopDiv').css("right","18px");
					}
				}
				$('#backTopDiv').css("position","absolute");
			}
		},
		
		//显示返回顶部的按钮
		showBackTopButton : function(){
			$('#backTopDiv').show('slow');
		},
		
		//隐藏
		hideBackTopButton : function(){
			$('#backTopDiv').hide('slow');
		},
		
		// 添加滚动事件监听器
		addScrollListners : function(){
			
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					BackToTop.showBackTopButton();
				} else {
					BackToTop.hideBackTopButton();
				}
			});
			
		},
		
		//鼠标移入事件
		onMouseOver : function(){
			$('#backTopDiv').mouseover(function(){
				$("#backToTopImage").css({
					'background': "url(\'"+BACK_IMAGE_URL+"\') no-repeat 0px -50px"
				});
			});
		},
		
		//鼠标移出事件
		onMouseOut : function(){
			$('#backTopDiv').mouseout(function(){
				$("#backToTopImage").css({
					'background': "url(\'"+BACK_IMAGE_URL+"\') no-repeat 0px 0px"
				});
			});
		},
		
		// 按钮单击事件监听器
		// scroll body to 0px on click
		addTopButtonClick : function(){
			$('#backTopDiv').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 400);
				return false;
			});
		},
		
		init:function(){
			BackToTop.initBackTopDIV();
			BackToTop.addScrollListners();
			BackToTop.onMouseOver();
			BackToTop.onMouseOut();
			BackToTop.addTopButtonClick();
		}
		
	};
	
}();

$(function(){
	BackToTop.init();
});
