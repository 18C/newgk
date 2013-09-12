// define module (component)
define('highcharts-end', function() {
	return {
		template: "<div id='{{id}}'></div>",
		script: function() {
			var $parent = this.$ele.parent();

			this.init = function() {
				$parent.data($parent.id)._gk_._render();
			};
		}
	};
});