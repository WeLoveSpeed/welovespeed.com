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
  console.log("It's time to come to\n\n                   .7IO$=8O$7.\n               .8O ?$77Z~7=O$DZ.                     .?$,\n            .8ZODI7$ZZ78?I~OO8O.                     .?~O\n          .I+888O$O$8.   .IZZI+                     .O78Z\n         7OI$ODDDZ.     .7O77..                     8O7Z$\n        Z+8O$O$D     .$OZOOD                       8OO7O\n       ?+~=7Z7.     .$?$DD                         D88O.\n       $Z?=ZO       8O788   =..     ..      . 8=8.8ZND8\n       O8DO8$+     .Z87    .ZZO.   .78$=   ,OID8+OOO78\n        O8D88$OD.          $O88.   DOZ8   8.D8O.~DD$+.\n         .88D$N$$Z~      .D$.8O   D888I  =OZOO  OD$?D\n           .Z8?ZZ88D8    .ZZZD   .ZDZO.  Z$DO=  OO8..     8.\n             ..?ZOOO$7D  8$ZZ..  OO+8.  ODZ8O  .8D$7    I+.\n                 .87DD78.D7OO   $888O. ,ONDZ.  .DZZ.  .Z7.\n                   Z8DO8 D8O.. 877O8. ~7DD8+  O8ZO=   8OZ\n        .+$D78DD$.O88OD.7DDO,DO8O$7O.DION$D .ZZ8ZZ8  8Z~\n     .N8$OOI   .$OO7O?. .888ZZZ  NONOD+ 8$D$88. O8O$O8.\n     87O7=?N$78NO8?7D     .8Z    .7O7   .8D~?.  .8IZ7\n     O8DN~7INO8DO I\n       Z8+?Z$ Z8\n            . ..               ..  .\n           DOO$II+?           +7I$OI7.\n       .=++?.  .=++=            II7II.              ??\n      ?++I?.   .$$+I            +?+?+?             ???I\n    .??~?.     .$?$7    $+Z     I+7?+,            .???I\n   ?++?+.      .$OZZ  .I$7ZZ    ZO7O~            .?=I+\n .I????.       :OZOO  ,?I$ZO    $Z$$+           .77I++\n.++=+? .       $OOOZ .$7$$$Z   $$77 .           . =+=.\n?+=+++         $ZZZ$.$$7$$$7   IIIII   IIII77  .?=+=..++~+\n+?+++.        :I7ZZ.$ZZZ777I   $$Z$  .,7Z7$$$7 ..+++=++,++=\n ??++.        =+=++~II.ZZ$$Z  ZZZ.. 7.Z$Z..ZZ7 $7??=7  +==?\n   ..        :=~+~.==. ?++7   ZZZ: ,$Z$Z. Z$Z. $ZI,I. .++++\n             ==+?+.++ ==+=+ .+~Z7  IOOZ  $Z$  ~$Z$7   ?IZZ\n            :+===.?+ .?+==~ ==+=  ?ZOO.ZZ$. .~$ZZ$   +$$$I\n           .+??=,?=   ???=~:+++.  +=~$. .   ?ZZZZ.   Z$$Z\n           =+???++   .+=~=?=?~.   +?==.    ZZZZZ$  .$$$$,\n          .~+7I?++   .+7I+7??.    +I?+.  :OOI ZZZZ,$ZZZ.\n          =I+I?I?     +??$?~       +I=+?:+=   ZZZZZZZZ\n          ?~?7I?.      .+?+         .  ...     .Z   .\n          .~+?~~\n           .=+I,");

})();
