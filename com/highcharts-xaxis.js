// define module (component)
define('highcharts-xaxis', function() {
	return {
		template: "<div id='{{id}}'></div>",
		script: function() {
			var $oriEle = this.$originEle;
			var $parent = this.$ele.parent();

			this.init = function() {
				var options = $parent.data($parent.id)._gk_.options;
				$.extend(true, options, {
					xAxis: {
						title: {
							text: $oriEle.attr("titleText")
						},
						type: $oriEle.attr("type")
					}
				});
			};
		}
	};
});