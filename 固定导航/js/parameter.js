$(function () {
    // 上部导航栏固定
    $(this).scroll(function() {
        var t = $(document).scrollTop();
        var h = $('table').offset().top;
        var r = $("#fixed_top").height()
        var s = $("body").height();
        console.log(t, r, s, h);
        s = s - r;
        console.log(s);
        
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

    //  左侧导航栏固定
    
})