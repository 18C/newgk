requirejs.config({
	context: 'gk',
	paths: {
		'highchartsjs': 'lib/highcharts/highcharts',
		'highcharts-start': 'com/highcharts-start'
	}
});

// define module (component)
define('highcharts', ['highcharts-start', 'highchartsjs'], function(highchartsStart) {
	var script = highchartsStart.script;
	highchartsStart.script = function() {
		var $ele = this.$ele;
		script.apply(this);

		this._render = function() {
			$ele.highcharts(this.options);
			this.highcharts = $ele.highcharts();
		};
	};
	return highchartsStart;
});