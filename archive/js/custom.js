//custom js goes here
$(document).ready(function(){

	$( document ).ready(function() {
		if (typeof gapi !== 'undefined')
		{
			gapi.comments.render('google_comments', {
				href: window.location,
				width: $('article.post').width(),
				first_party_property: 'BLOGGER',
				view_type: 'FILTERED_POSTMOD'
			});
		}
	});

});
