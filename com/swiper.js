requirejs.config({
	context: 'gk',
	paths: {
		'idangerous.swiper': 'lib/swiper/idangerous.swiper-2.1.min'
	}
});

// define module (component)
define('swiper', ['idangerous.swiper'], function() {
	return {
		template: "<div id='{{id}}' class='swiper-container'><div class='swiper-wrapper'><content></content></div></div>",
		script: function() {
			var $oriEle = this.$originEle;
			var $ele = this.$ele;

			var defaults = {
				'onSlideChangeStart': function() {
					$ele.triggerHandler("onSlideChangeStart", arguments);
				},
				'onSlideClick': function() {
					$ele.triggerHandler("onSlideClick", arguments);
				}
			};

			var config = $.extend(defaults, {
				freeMode: $oriEle.attr("freeMode") === 'true',
				freeModeFluid: $oriEle.attr("freeModeFluid") === 'true',
				grabCursor: $oriEle.attr("grabCursor") === 'true',
				slidesPerView: $oriEle.attr('slidesPerView')
			});

			var pagination = $('.pagination');
			var pagination_defaults;
			if (pagination.length > 0) {
				pagination_defaults = {
					'pagination': pagination.selector,
					'paginationClickable': true
				};
			}

			this.init = function() {
				var settings = $.extend({}, defaults, config, pagination_defaults);
				this.swiper = $ele.swiper(settings);
			};
		}
	};
});