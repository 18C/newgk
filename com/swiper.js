requirejs.config({
	context: 'gk',
	paths: {
		'idangerous.swiper': 'lib/swiper/idangerous.swiper-2.1.min',
	}
});

// define module (component)
define(
	'swiper', ['idangerous.swiper'],
	function() {
		return {
			template: "<div id='{{id}}' class='swiper-container'><div class='swiper-wrapper'><content></content></div></div>",
			script: function() {
				var $oriEle = this.$originEle;
				var $ele = this.$ele;

				var defaults = {
					'grabCursor': true,
					'onSlideChangeStart': function() {
						$ele.triggerHandler("slideChangeStart", arguments)
					}
				};

				var pagination = $('.pagination');
				var pagination_defaults;
				if (pagination.length > 0) {
					pagination_defaults = {
						'pagination': pagination.selector,
						'paginationClickable': true
					};
				}

				this.init = function() {
					var settings = $.extend({}, defaults, pagination_defaults);
					this.swiper =  $ele.swiper(settings);					
				};
			}
		};
	});