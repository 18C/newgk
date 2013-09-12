requirejs.config({
	context: 'gk',
	paths: {
		'highcharts-end': 'com/highcharts-end'
	}
});

// define module (component)
define('highcharts-start', ['highcharts-end'], function(highchartsEnd) {
	$.gk.registry("highcharts-end", highchartsEnd);
	return {
		template: "<div id='{{id}}' style='{{style}}'><content></content><highcharts-end /></div>",
		script: function() {
			var $oriEle = this.$originEle;
			var $ele = this.$ele;

			this.init = function() {
				this.options = $.extend(true, {}, {
					chart: {
						type: $oriEle.attr("type"),
						zoomType: $oriEle.attr("zoomType"),
					},
					credits: {
						enabled: false
					},
					title: {
						text: $oriEle.attr("titleText")
					}
				});
			};

			this.addSeries = function(series) {
				this.highcharts.addSeries(series);
			};

			this.remove = function(index) {
				this.highcharts.series[index].remove();
			};

			this.removeAll = function() {
				var series = this.highcharts.series;
				for (var i = 0; i < series.length; i++) {
					series[i].remove();
				}
			};

			this.setTitle = function(obj) {
				if (typeof(obj) === 'string') {
					this.highcharts.setTitle({
						text: obj
					});
				} else {
					this.highcharts.setTitle(obj);
				}
			};
		}
	};
});