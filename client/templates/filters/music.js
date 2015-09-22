Template.music.helpers({
	// Finds events from database
	musics: function () {
		// Finds and formats current time
		var now = moment().format("YYYY-MM-DDTHH:mm");
		// Returns current and future music events
		return Events.find({end:{$gte: now}, music: true});
	}
});

// Displays filters tab and animations when template rendered
Template.music.rendered = function () {
	$('#filters').slideDown();
	$('#yourEvents').addClass('navselect');
	$('#music').addClass('filterselect');
};

// Removes filters tabs and animations when template rendered
Template.music.destroyed = function () {
	$('#filters').slideUp();
	$('#yourEvents').removeClass('navselect');
	$('#music').removeClass('filterselect');
};