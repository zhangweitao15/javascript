
$(function () {
    var compare, selectors,
	isAnimate = false,
	CLASS_FIXED = 'fixed-top',
	selectHeight,
	menuWidth;

selectors = {
	table: '.J_compare_table',
	section: '.J_compare_table>.param-tit',
	menu: '.J_compare_menu',
	select: '#fixed_top'
};

var selectHeight = $(selectors.select).height();
var menuWidth = $(selectors.menu).width();
compare = {
	init: function() {
		if($(selectors.menu).length > 0) {
			this.setSelectFixed();
			this.setMenuLocation();
		}

		this.bindEvent();
	},
	bindEvent: function() {
		var self = this;

		$(selectors.menu).on('click', 'a', function() {
			var index = $(this).index();

			self.setMenuActive(index);
			self.setCompareLocation(index);
		});

		$(window).on('scroll', function() {
			self.setSelectFixed();
			self.setMenuLocation();
		})
	},
	setSelectFixed: function() {
		var scrollTop = $(window).scrollTop(),
		    scrollLeft = $(window).scrollLeft(),
            selectTop = $(selectors.select).parent().offset().top,
            selectLeft = $(selectors.select).parent().offset().left;
		if(scrollTop >= selectTop) {
			$(selectors.select).addClass(CLASS_FIXED);
			$(selectors.menu).css({
				top: selectHeight,
				left: selectLeft - scrollLeft - menuWidth - 3,
				marginLeft: 0,
				position: 'fixed'
			});
		} else {
			$(selectors.select).removeClass(CLASS_FIXED);
			$(selectors.menu).css({
				left: '50%',
				top: '425px',
				marginLeft: '-675px',
				position: 'absolute'
			});
		}

		if($(selectors.menu).css('position') == 'fixed') {
			$(selectors.select).css({
				left: selectLeft - scrollLeft
			});
		}
	},

	setMenuLocation: function() {
		var self = this;

		if(isAnimate) {
			return;
		}

		$(selectors.section).each(function(index, ele) {
			var scrollTop = $(window).scrollTop(),
				sectionTop = $(this).offset().top,
				sectionHeight = $(this).height(),
				menuTop = $(selectors.menu).position().top,
				mTop = menuTop + index * $(selectors.menu).find('a:eq(0)').outerHeight(true);
                console.log(sectionTop);
                
			if($(selectors.menu).css('position') == 'fixed') {
				if(scrollTop + mTop >= sectionTop && scrollTop + mTop <= sectionTop + sectionHeight) {
					self.setMenuActive(index);
				}
			} else {
				self.setMenuActive(0);
			}

			if(scrollTop + mTop > sectionTop + sectionHeight) {
				$(selectors.menu).find('.on').removeClass('on');
			}
		});
	},

	setMenuActive: function(index) {
		$(selectors.menu).find('.on').removeClass('on');
		$(selectors.menu).find('a').eq(index).addClass('on');
	},

	setCompareLocation: function(index) {
		var menuTop, boxTop;

		if($(selectors.menu).css('position') == 'fixed') {
			menuTop = $(selectors.menu).position().top;
		} else {
			menuTop = selectHeight;
		}

		boxTop = $(selectors.section).eq(index).offset().top - selectHeight - index * $(selectors.menu).find('a:eq(0)').outerHeight(true);

		isAnimate = true;

		$('html, body').animate({
			scrollTop: boxTop + 'px'
		}, 400, function() {
			isAnimate = false;
		});
	}
}
compare.init();
})
