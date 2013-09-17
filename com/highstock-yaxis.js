// define module (component)
define('highstock-yaxis', function() {
	return {
		template: "<div id='{{id}}'></div>",
		script: function() {
			var $oriEle = this.$originEle;
			var $parent = this.$ele.parent();

			this.init = function() {
				var options = $parent.data($parent.id)._gk_.options;
				var configs = {
					yAxis: {
						title: {
							text: $oriEle.attr("titleText")
						},
						opposite: $oriEle.attr("opposite") === 'true' ? true : false
					}
				};
				
				if ('yAxis' in options) {
					var origin = options.yAxis;
					if ($.isArray(origin)) {
						origin.push(configs);
					} else {
						options.yAxis = [origin, configs.yAxis];
					}
				} else {
					$.extend(true, options, configs);
				}
			};
		}
	};
});