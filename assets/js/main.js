(function(window, $){

'use strict';

// Underscore is bundled in with ender, so just require it
// Comment out this line when using the separated Underscore file,
// eg. when using jQuery
var _ = require('underscore');

// Document -------------------------------------------------------------------

// When using jQuery, use
// $(document).ready(function () {

$.domReady(function () {

	console.log('## Document ready');

	// VARS -------------------------------------------------------------------
	//

	var
		$window = $(window),
		$body = $('body'),

		$ghStarButton = $('.github-star-button')
	;

	// ACTIONS ----------------------------------------------------------------
	//

	initTwitterButton(document, 'script', 'twitter-wjs');
	initFacebookButton();
	$ghStarButton.attr('src', 'http://ghbtns.com/github-btn.html?user=flovan&repo=ttyg&type=watch&count=true');

	//
	// FUNCTIONS --------------------------------------------------------------
	//

	function initFacebookButton () {
		var e = document.createElement('script'); e.async = true;
		e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
		document.getElementById('fb-root').appendChild(e);
	}

	function initTwitterButton (d,s,id) {
		var js,
			fjs = d.getElementsByTagName(s)[0],
			p = /^http:/.test(d.location) ? 'http' : 'https';

		if (!d.getElementById(id)) {
			js = d.createElement(s);
			js.id = id;
			js.src = p + '://platform.twitter.com/widgets.js';
			fjs.parentNode.insertBefore(js,fjs);
		}
	}

});

window.fbAsyncInit = function() {
	FB.init({appId: '912714955409005', status: true, cookie: true,
	xfbml: true});
};

}(window, $));