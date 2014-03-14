'use strict';

//Initialize the user's stress level
//localStorage.setItem("userStressLevel", 0);

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

/*	$('.ui-slider-handle').on('mouseup', function(e) {
		console.log('working?');

		$.get('/content', contentAJAX);
	});*/

	$('#slider-fill').on('change', function(e) {
		console.log('working?');

		//update the user's current stress level
/*		var ponce2 = localStorage.getItem("userStressLevel");
		console.log(ponce2);

		var stressLevel = $("#slider-fill").val();
		localStorage.setItem("userStressLevel", stressLevel);

		//print to check it's value has been updated
		var ponce = localStorage.getItem("userStressLevel");
		console.log(ponce);*/
		//$.get('/content', contentAJAX);
	});

	//Set User's Initial Stress Level
	//$('#slider-user-stress').val(userStressLevel);


	$.get('/content', contentAJAX);

	$('#like').on("click", function(e) {

		// get new content
		$.get('/content', contentAJAX);

		// Update Stress range slider
		var stressLevel = $('input[name=stress-progress]').val();
		stressLevel = stressLevel - 3;
		$("#stress-progress").val(stressLevel).slider("refresh");

		//console 
		console.log(stressLevel);
		console.log('Like Clicked:');
	});
}

function contentAJAX(ajaxResult) {
	var content = ajaxResult[Math.floor(ajaxResult.length * Math.random())];
	var url = content.location;
	var description = content.content;
	var message = content.message;
	var from = content.from;
	var contentType = content.type;

	console.log(contentType);

	$('#content-wrapper').empty();
	$('#content-title').empty();
	$('#content-from').empty();
	$('#content-message').empty();

	if (contentType === 'video' || contentType === 'music') {
		// title
		$('<h3>').appendTo('#content-title');
		$('#content-title h3').text(description);

		// content
		$('<iframe>').appendTo('#content-wrapper');
		$('#content-wrapper').css('height', '250px');

		$('#content-wrapper iframe').attr({
			src: url+'?autoplay=1',
			width:'100%',
			height:'100%',
			margin: '0 auto 0 auto',
		});

		//from
		$('<h3>').appendTo('#content-from');
		$('#content-from h3').text('From: '+ from);

		//message
		$('<p>').appendTo('#content-message');
		$('#content-message p').text(message);
	}

	if (contentType === 'picture') {
		// title
		$('<h1>').appendTo('#content-title');
		$('#content-title h1').text(description);

		// content
		$('<img>').appendTo('#content-wrapper');
		$('#content-wrapper').css('height', '100%');

		$('#content-wrapper img').attr({
			src: url,
			width: '100%',
			height: 'auto',
			margin: '0 auto 0 auto',
		});

		//from
		$('<h3>').appendTo('#content-from');
		$('#content-from h3').text("From: " + from);

		//message
		$('<p>').appendTo('#content-message');
		$('#content-message p').text(message);
	}

	if (contentType === 'quote') {
		// title
		$('<h3>').appendTo('#content-title');
		$('#content-title h3').text('Happy Quote:');

		// content
		$('<p class="well">').appendTo('#content-wrapper');
		$('#content-wrapper p').text(description);
		$('#content-wrapper').css('height', '150px');

		//from
		$('<h4>').appendTo('#content-from');
		$('#content-from h4').text("From: Team Happy Thoughts");

		//messa
	}

	if (contentType === 'challenge') {
		// title
		$('<h1>').appendTo('#content-title');
		$('#content-title h1').text('Challenge:');

		// content
		$('<p class="well">').appendTo('#content-wrapper');
		$('#content-wrapper p').text(description);
		$('#content-wrapper').css('height', '150px');

		//from
		$('<h4>').appendTo('#content-from');
		$('#content-from h4').text("From: Team Happy Thoughts");
	}

}

