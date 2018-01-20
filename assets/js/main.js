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


  // Oh!
  console.log("                     7MMNMMMMM.\n              . 7M MMMMMMMMMMMM                       MM\n             MMIMMMMMMMMMM+MMMM   Time to come to    MMMM\n           M.MMMMMMMM.   .MMMMI                      MMMM\n         MMMMMMMMM       MMMM                       MMMM\n        MMMMMMMM      MMMMMM                       MMMMM\n       MMMMMMM       MMMMM                         MMMM\n       MMMMMM       MMMMM   M .              ,MM~ MMMM=\n       MMMMMMM      MMM    .M8M.    MMM?   DMMMMMMMMMM\n        MMMMMMMM .         MMMM    MMMM   M+MMM MMMMM\n          MMMMMMMM+       MM.MM   MMMM   MNMMM  MMMMM.\n            $MMMMMMMM.    MMMM   ?MMMM   MMMM   MMMI     .M\n               ~MMMMMMM  MMMM.   MM+M   MMMMM  ~MMMM    MM\n                  MMMMMM.MMMM  .MMMMM .:MMMM   ZMM,    MM\n                  .MMMMM MMM  .MMMMM  MMMMM   MMMMM   MM.\n         ,MMMMMMM MMMMM  MMM,MMMMMMM MMMMMM  MMMMMM .MM\n     .MMMMM8   .MMMMM.   MMMMMM  MMMMM  MMMMMM  MMMMMM\n     MMMMMMMMMMMMMMMM      MM     MM8    MMM.    MMMZ\n     .MMMMMMMMMMM:M\n       NMMMMM,MM:\n\n           MMMMMMMM           MMMMMMM\n        ~MMM.   MMMM            MMMMM               MM\n      .MMMM     +MMM            MMMMM.             MMMM\n     MMMMM      .MMM    MMM     MMMMM             .MMMM\n   MMMMM        ZMMM   MMMMM    MMMM=             +MMM\n  OMMMM~        MMMM  :MMMMM    MMMMM            MMMM.\n =MMMMM        MMMMM  MMMMMM   MMMM             .~MMM\nMMMMMM         .MMMM MMMMMMM  .MMMMM   MMMMMM   MMMM MMMM.\nMMMMM          MMMM MMMMMMMM  .MMMM  ..MMMMMMM :MMMMMMMMMI\n MMMM         MMMMM.MM MMMMM  MMM.  DI?MM ~MM  MMMM.M  MM?,\n    =         MMMM MMM MMMM   MMM  :MDMM  ~MM  MMMMN   MM\n             MMMMM.MM MMMMM .MMMZ  OMMM. MMM  MMMM~   MMMM\n            .MMMMIMM  MMMMM MMMM  MMMM MMM   MMMMN   MMMMO\n            MMMMMMM.  MMMMMIMMM   MMMM.     MMMMM   :MMMM\n           :MMMMMM    MMMMMMMM    MMM$     MM:MMM   MMMM\n           MMMMMMM    MMMMMMM     MMMM  .MMM. MMMM.MMMM.\n           MMMMMM     MMMMMM      .MMMMMMMM   MMMMMMMM\n           MMMMM.      .MMM            .        M  .\n           MMMMM\n            MMM8");

})();
