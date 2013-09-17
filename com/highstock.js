requirejs.config({
	context: 'gk',
	paths: {
		'highstockjs': 'lib/highstock/highstock',
		'highcharts-start': 'com/highcharts-start'
	}
});

// define module (component)
define('highstock', ['highcharts-start', 'highstockjs'], function(highchartsStart) {
	var script = highchartsStart.script;
	highchartsStart.script = function() {
		var $ele = this.$ele;
		script.apply(this);

		this._render = function() {
			console.log(this.options)
			$ele.highcharts('StockChart', this.options);
			this.highcharts = $ele.highcharts();
		};
	};
	return highchartsStart;
});