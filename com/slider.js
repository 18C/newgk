requirejs.config({
	context: 'gk',
	paths: {
		'jquery': 'lib/jquery/jquery-1.10.1',
		'jquery_ui': 'lib/jquery-ui/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.min',
		'jquery_ui_touch_punch': 'lib/jquery-ui/jquery.ui.touch-punch.min'
	},
	shim: {
		'jquery_ui': {
			deps: ['jquery']
		},
		'jquery_ui_touch_punch': {
			deps: ['jquery', 'jquery_ui']
		}
	}
});

// define module (component)
define(
	'slider', ['jquery_ui_touch_punch'],
	function() {
		return {
			template: "<div id='{{id}}'></div>",
			script: function() {
				var $oriEle = this.$originEle;
				var $ele = this.$ele;

				this.init = function() {
					var max = $oriEle.attr('max');
					var min = $oriEle.attr('min');
					var step = $oriEle.attr("step");
					var value = $oriEle.attr("value");
					var reg = /^(\d+)$/;

					var settings = {
						'orientation': $oriEle.attr('vertical') === 'true' ? 'vertical' : 'horizontal',
						'max': reg.test(max) ? parseInt(max, 10) : 100,
						'min': reg.test(min) ? parseInt(min, 10) : 1,
						'step': reg.test(step) ? parseInt(step, 10) : 1,
						'value': reg.test(value) ? parseInt(value, 10) : 0
					};

					$ele.slider(settings);
				};
			}
		};
	});