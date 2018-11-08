$(function () {
	var boxTop = '#fixed_top',//顶部盒子
		boxLeft = '#ai_p_0',//左侧盒子
		boxSid,//侧边栏
		finxd,//固定导航类名
		clTable = '.cl-table';//固定导航界限
	var offsetTop,// 元素距浏览器顶部
		offsetLeft,// 元素距浏览器左侧
		scrollTop,// 页面卷曲高度
		scrollLeft,// 页面卷曲宽度
		heightTop,//顶部固定盒子的高度
		widthLeft,//左侧固定盒子的宽度
		fiLeft,// 顶部固定盒子left
		noneTop;// 左侧隐藏的头部top
	//顶部固定
	$(window).scroll(function () {
		offsetTop = $(clTable).offset().top;
		offsetLeft = $(clTable).parent().offset().left;
		scrollLeft = $(window).scrollLeft();
		scrollTop = $(window).scrollTop();
		heightTop = $(boxTop).height();
		var fiLeft = offsetLeft - scrollLeft;
		if (scrollTop >= offsetTop) {
			$(boxTop).addClass('fixed-top');
			$(boxTop).css('left', fiLeft);
			$(boxTop).next().css('height', heightTop + 'px');
		} else {
			$(boxTop).removeClass('fixed-top');
			$(boxTop).next().css('height', '0');
		}
	})
	// 左侧固定
	$(window).scroll(function () {
		var offsetLeft = $(clTable).offset().left;
		var scrollLeft = $(window).scrollLeft();
		var widthLeft = $(boxLeft).offset().width;
		var bodyTop = offsetTop -  scrollTop + heightTop;
		var titleTop = $('#fixed_top').offset().top - scrollTop;
		if (scrollLeft >= offsetLeft) {
			$('.left-top-boxs').css({
				display: 'block',
				top: titleTop + 'px'
			});
			$('.par-deb-box').css({
				display: 'block',
				top: bodyTop + 'px'
			});
		} else {
			$('.left-top-boxs').css('display', 'none');
			$('.par-deb-box').css('display', 'none');
		}
	})
//	// 左侧楼梯
	$(window).scroll(function () {
		if ($(boxTop).css('position') == 'fixed' ) {
			var menuTop = heightTop;
			$('.J_compare_menu').css({
				position: 'fixed',
				top: menuTop + 'px'
			})
		} else {
			$('.J_compare_menu').css({
				position: 'absolute',
				top: '342px'
			})
		}
		$('.J_compare_menu').on('click', 'a', function() {
			var index = $(this).index();
			menuActive(index)
		})
	})
	function menuActive(index) {
	  $('.J_compare_menu').find('.on').removeClass('on');
	  $('.J_compare_menu').find('a').eq(index).addClass('on');
	}
	$('.J_compare_table > .param-tit').eq(1)

})
