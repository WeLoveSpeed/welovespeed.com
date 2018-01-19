(function () {

	[...document.querySelectorAll('[data-target]')].forEach(function(trigger){
		trigger.addEventListener('click',function(e){
			[trigger, ...document.querySelectorAll(trigger.getAttribute('data-target'))].forEach(function(target){
				target.classList.toggle('is-active');
			});
		});
	});

	function loadScript(url, callback) {
		var script = document.createElement('script'),
			loaded = false;

		script.setAttribute('src', url);
		script.onreadystatechange = script.onload = function () {
			if (!loaded && callback) {
				callback();
				loaded = true;
			}
		};

		document.head.appendChild(script);
	}

	function initSmoothScroll() {
		loadScript(
			'https://cdn.rawgit.com/cferdinandi/smooth-scroll/master/dist/js/smooth-scroll.min.js',
			function () {
				var scroll = new SmoothScroll("a[href^='#']:not([role='button'])", {
					speed: 1000,
					easing: 'easeInOutQuint'
				});
			}
		);
	}

	document.addEventListener('DOMContentLoaded', initSmoothScroll);

})();
