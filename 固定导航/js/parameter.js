$(function () {
  // 上部导航栏固定
  function setSelectFixed() {
    var t, top, h, r, s;

    $(this).scroll(function () {
      t = $(document).scrollTop();
      top = $('#fixed_top').offset().top - t;
      console.log($('#fixed_top').offset().top, t, top);
      $('.left-top-boxs').css({top:  top});
      h = $('table').offset().top;
      r = $("#fixed_top").height();
      s = $("body").height();
      s = s - r;
      if (t < h) {
        $("#fixed_top").removeClass('fixed-top');
        $('#fixed_top').next().css('height', 0);
      } else {
        $("#fixed_top").addClass('fixed-top');
        $('#fixed_top').next().css('height', 160 + 'px');
      }
      if (t > s) {
        $("#fixed_top").removeClass('fixed-top');
        $('#fixed_top').next().css('height', 0);
        $("#fixed_top").addClass('fiesd-bottom');
      } else {
        $("#fixed_top").removeClass('fiesd-bottom');
      }
    });
  }
  setSelectFixed();
})

$(function () {
  var h = $('table').offset().left;
  ti = $('#fixed_top').offset().top
  $(this).scroll(function () {
    var t = $(document).scrollTop();
    var tl = $(document).scrollLeft()
    var r = $("#fixed_top").height();
    var w = $("#fixed_top").width();
    var s = $("body").width();
    s = s - w;
    var top = ti + r - t;
    var left = h - tl;
    left = left + 
    'px';


    if (tl < h) {
      $(".left-top-boxs").removeClass('par-fix-left');
      $(".par-deb-box").removeClass('par-fix-left');
      $('.compare-param-menu').css('display', 'block');

      $("#fixed_top").css('left', left)

    } else {
      $(".left-top-boxs").addClass('par-fix-left');
      $('.par-deb-box').addClass('par-fix-left');
      $('.compare-param-menu').css('display', 'none');
      $('.par-deb-box').css('top', top + 'px')
      $("#fixed_top").css('left', left)

    }
  })
})


$(function () {
  $(window).scroll(function () {
    var ti = $('#fixed_top').offset().top
    var t = $(document).scrollTop();
    var r = $("#fixed_top").height();
    var h = $('#fixed_top').height();
    var top = ti + r - t;
    $('.J_compare_menu').css('top', top + 'px');

  })
	setMenuLocation()
})
setMenuLocation()

function setMenuLocation () {
	$('.J_compare_menu').on('click', 'a', function () {
		var index = $(this).index(),
			r = $("#fixed_top").height(),
			boxTop;
		setMenuActive(index)
		$('#fixed_top').hasClass('fixed-top')
		boxTop = $('.J_compare_table >.param-tit').eq(index).offset().top - r - index * $('.J_compare_menu').find('a:eq(0)').outerHeight(true);
		isAnimate = true;
		$('html, body').animate({
			scrollTop: boxTop + 'px'
		}, 400, function () {
			isAnimate = false;
		})
	})
}
$(function () {
  $(window).on('scroll', function () {
    $('.J_compare_table >.param-tit').each(function(index, ele) {
			var scrollTop = $(window).scrollTop(),
				  sectionTop = $(this).offset().top,
				  sectionHeight = $(this).height(),
				  menuTop = $('.J_compare_menu').position().top,
				  mTop = menuTop + index * $('.J_compare_menu').find('a:eq(0)').outerHeight(true);
          if($('.J_compare_menu').css('position') == 'fixed') {
            if(scrollTop + mTop >= sectionTop && scrollTop + mTop <= sectionTop + sectionHeight) {
              setMenuActive(index);
            }
          } else {
              setMenuActive(0);
          }
          if(scrollTop + mTop > sectionTop + sectionHeight) {
            $('.J_compare_menu').find('.on').removeClass('on');
          }
  })
})
})

function setMenuActive(index) {
  $('.J_compare_menu').find('.on').removeClass('on');
  $('.J_compare_menu').find('a').eq(index).addClass('on');
}