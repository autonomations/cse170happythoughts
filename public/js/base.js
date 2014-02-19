'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// $.get('/data');

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
	console.log('THIS WORKING?');
	var content = ajaxResult[Math.floor(ajaxResult.length * Math.random())];
	var url = content.location;
	var description = content.content;
	var contentType = content.type;
	$('#video-wrapper iframe').attr('src', url+'?autoplay=true');
	console.log('url', url);
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