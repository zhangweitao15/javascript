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
        console.log(left);
        
        
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

        // if (t > s) {
        //     $(".left-top-boxs").addClass('par-fix-left');
        //     $(".par-deb-box").addClass('par-fix-left');
        //     $('.par-deb-box').css('top', top + 'px')

        // } else {
        //     $(".left-top-boxs").removeClass('par-fix-left');
        //     $(".par-deb-box").removeClass('par-fix-left');
        // }
    })
})