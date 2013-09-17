// define module (component)
define('highstock-legend', function() {
	return {
		template: "<div id='{{id}}'></div>",
		script: function() {
			var $oriEle = this.$originEle;
			var $parent = this.$ele.parent();

			this.init = function() {
				var options = $parent.data($parent.id)._gk_.options;
				$.extend(true, options, {
					legend: {
						align: $oriEle.attr("align"),
						enabled: $oriEle.attr("enabled") === 'true' ? true : false,
						verticalAlign: $oriEle.attr("verticalAlign"),
						layout: $oriEle.attr("layout")
					}
				});
			};
		}
	};
});