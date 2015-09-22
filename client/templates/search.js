// checks if template rendered and changes sidebar button appearance
Template.search.rendered = function () {
	$('#searchbutton').addClass('navselect');
};

// checks if template switched and changes sidebar button back
Template.search.destroyed = function () {
	$('#searchbutton').removeClass('navselect');
};