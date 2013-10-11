requirejs.config({
	context: 'gk',
	paths: {
		'badgerjs': 'lib/badger/badger.min'
	}
});

// define module (component)
define('badger', ['badgerjs'], function() {
	return {
		template: "<div id='{{id}}' style='{{style}}'><content></content></div>",
		script: function() {
			var $oriEle = this.$originEle;
			var $ele = this.$ele;

			this.badger = function(count) {
				$ele.badger(count);
			};
		}
	};
});