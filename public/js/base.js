'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$.get('/content', contentAJAX);

	$('#next').click(function(e) {
		$.get('/content', contentAJAX);
		console.log('Next Clicked:');
	});


	$('#previous').click(function(e) {
		$.get('/content', contentAJAX);
		console.log('Previous Clicked');
	});

	/* Highlight active menu item */
	$('.navbar-default .navbar-nav>li>a').click(function(e) {
        $('a').removeClass('active');s
    });
}



function contentAJAX(ajaxResult) {
	var content = ajaxResult[Math.floor(ajaxResult.length * Math.random())];
	var url = content.location;
	var description = content.content;
	var contentType = content.type;

	console.log(contentType);

	$('#content-wrapper').empty();

	if (contentType === 'video' || contentType === 'music') {
		$('<iframe>').appendTo('#content-wrapper');
		$('#content-wrapper').css('height', '500px');

		$('#content-wrapper iframe').attr({
			src: url+'?autoplay=1',
			width: '900px', 
			height: '500px'
		});
	}

	if (contentType === 'picture') {
		$('<img>').appendTo('#content-wrapper');
		$('#content-wrapper').css('height', '500px');

		$('#content-wrapper img').attr({
			src: url,
			width: '900px', 
			height: '500px',
			margin: '0 auto 0 auto',

		});
	}

	if (contentType === 'quote') {
		$('<p>').appendTo('#content-wrapper');
		$('#content-wrapper p').text(description);
		$('#content-wrapper p').css('height', '250px');
		$('#content-wrapper').css('height', '250px');
	}

	if (contentType === 'challenge') {
		$('<p>').appendTo('#content-wrapper');
		$('#content-wrapper p').text(description);
		$('#content-wrapper p').css('height', '250px');
		$('#content-wrapper').css('height', '250px');
	}

}


/*
 * JPANEL MENU
 */
// @codekit-prepend lib/modernizr-2.6.1.min.js
// @codekit-prepend lib/respond.js
// @codekit-prepend lib/highlight.min.js
// @codekit-prepend lib/jquery-1.9.0.js
// @codekit-prepend lib/jquery.jpanelmenu.min.js
// @codekit-prepend lib/plugins.js
// var jPanelMenu = {};
// $(function() {
// 	$('pre').each(function(i, e) {hljs.highlightBlock(e)});
	
// 	jPanelMenu = $.jPanelMenu({
// 		menu: 'header.main nav',
// 		openPosition: '250px',
// 		closeOnContentClick: false,
// 		// animated: true,
// 		duration: 300
// 	});
// 	jPanelMenu.on();

// 	$(document).on('click',jPanelMenu.menu + ' li a',function(e){
// 		if ( jPanelMenu.isOpen() && $(e.target).attr('href').substring(0,1) == '#' ) { jPanelMenu.close(); }
// 	});

// 	$(document).on('click','#trigger-off',function(e){
// 		jPanelMenu.off();
// 		$('html').css('padding-top','40px');
// 		$('#trigger-on').remove();
// 		$('body').append('<a href="" title="Re-Enable jPanelMenu" id="trigger-on">Re-Enable jPanelMenu</a>');
// 		e.preventDefault();
// 	});

// 	$(document).on('click','#trigger-on',function(e){
// 		jPanelMenu.on();
// 		$('html').css('padding-top',0);
// 		$('#trigger-on').remove();
// 		e.preventDefault();
// 	});
// });