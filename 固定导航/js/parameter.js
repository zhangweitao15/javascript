$(function () {
    // 上部导航栏固定
    var t, top, h, r, s;
    
    $(this).scroll(function() {
        t = $(document).scrollTop();
        top = $('#fixed_top').offset().top - t;
        $('.left-top-boxs').css('top', top);

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
        left = left + 'px';
        
        
        if (tl < h) {
            $(".left-top-boxs").removeClass('par-fix-left');
            $(".par-deb-box").removeClass('par-fix-left');
            $("#fixed_top").css('left', left)
            
        } else {
            $(".left-top-boxs").addClass('par-fix-left');
            $('.par-deb-box').addClass('par-fix-left');
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
        console.log(top);
        $('.J_compare_menu').css('top', top + 'px')
    })
    
    $('.J_compare_menu').on('click', 'a', function () {
        var index = $(this).index();
        $('.J_compare_menu').find('.on').removeClass('on');
        $('.J_compare_menu').find('a').eq(index).addClass('on');
    })
})

// $(function () {
    
//     var compare,
//     selectors,
//     isAnimate = false,
//     CLASS_FIXED = 'fixed-top',
//     selectHeight,
//     menuWidth;
//     selectors = {
//         table: '.J_compare_table',
//         section: ".J_compare_table >.param-tit",
//         menu: '.J_compare_menu',
//         select: '#fixed_top'
//     };
//     selectHeight = $(selectors.select).height();
//     menuWidth = $(selectors.menu).width();

//     compare = {
//         init:  function () {
//             if ($(selectors.menu).length > 0) {
//                 this.setSelectFixed();
//                 this.setMenuLocation();
//             }
//             this.bindEvent();
//         },
//         bindEvent: function () {
//             var self = this;
//             $(selectors.menu).on('click', 'a', function () {
//                 console.log(this);
                
//                 var index = $(this).index();
//                 self.setMenuActive(index);
//                 self.setCompareLocation(index);
//             });
//             $(window).on('scroll', function () {
//                 self.setSelectFixed();
//                 self.setMenuLocation();
//             })
//         },
//         setSelectFixed: function () {
//             var scrollTop = $(window).scrollTop()
//             var scrollLeft = $(window).scrollLeft()
//             var selectTop = $(selectors.select).parent().offset().top;
//             var selectLeft = $(selectors.select).parent().offset().left;
//             if (scrollTop >= selectTop) {
//                 $(selectors.select).addClass(CLASS_FIXED);
//                 $(selectors.menu).css({
//                     top: selectHeight,
//                     left: selectLeft - selectLeft - menuWidth - 3,
//                     marginLeft: 0,
//                     position: 'fixed'
//                 });
//             } else {
//                 $(selectors.select).removeClass(CLASS_FIXED);
//                 $(selectors.menu).css({
//                     left: '50%',
//                     top: 0,
//                     marginLeft: '-675px',
//                     position: 'absolute'
//                 });
//             }
//             if ( $(selectors.menu).css('position') == 'fixed') {
//                 $(selectors.select).css({
//                     left: selectLeft - scrollLeft
//                 });
//             }
//         },
//         setMenuLocation: function () {
//             var self = this;
//             if (isAnimate) {
//                 return;
//             }
//             $(selectors.section).each(function (index, ele){
//                 var scrollTop = $(window).scrollTop,
//                 sectionTop = $(this).offset().top,
//                 sectionHeight = $(this).height(),
//                 menuTop = $(selectors.menu).position().top,
//                 mTop = menuTop + index * $(selectors.menu).find('a:eq(0)').outerHeight(true);
//                 if ($(selectors.menu).css('position') == 'fixed') {
//                     if(scrollTop + mTop >= sectionTop && scrollTop + mTop <= sectionTop + sectionHeight) {
//                         self.setMenuActive(index);
//                     }
//                 } else {
//                     self.setMenuActive(0);
//                 }
//                 if (scrollTop + mTop > sectionTop + sectionHeight) {
//                     $(selectors.menu).find('.on').removeClass('on');
//                 }
                
//             });
//         },
//         setMenuActive: function (index) {
//             $(selectors.menu).find('.on').removeClass('on');
//             $(selectors.menu).find('a').eq(index).addClass('on');
//         },
//         setCompareLocation: function (index) {
//             var menuTop, boxTop;
//             if ($(selectors.menu).css('position') == 'fixed') {
//                 menuTop = $(selectors.menu).position().top;
//             } else {
//                 menuTop = selectHeight;
//             }
//             boxTop = $(selectors.section).eq(index).offset().top - selectHeight - index * $(selectors.menu).find('a:eq(0)').outerHeight(true);
//             isAnimate = true;
//             $('html, body').animate({
//                 scrollTop: boxTop + 'px'
//             }, 400, function () {
//                 isAnimate: false;
//             });
//         }
//     }
//     compare.init();
// })