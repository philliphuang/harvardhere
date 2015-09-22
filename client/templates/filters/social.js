Template.social.helpers({
	// Finds events from database
	socials: function () {
		// Finds and formats current time
		var now = moment().format("YYYY-MM-DDTHH:mm");
		// Returns current and future social events
		return Events.find({end:{$gte: now}, social: true});
	}
});

// Displays filters tab and animations when template rendered
Template.social.rendered = function () {
	$('#filters').slideDown();
	$('#yourEvents').addClass('navselect');
	$('#social').addClass('filterselect');
};

// Removes filters tabs and animations when template rendered
Template.social.destroyed = function () {
	$('#filters').slideUp();
	$('#yourEvents').removeClass('navselect');
	$('#social').removeClass('filterselect');
};