Template.arts.helpers({
	// Finds events from database
	arts: function () {
		// Finds and formats current time
		var now = moment().format("YYYY-MM-DDTHH:mm");
		// Returns current and future art events
		return Events.find({end: {$gte: now}, arts: true});
	}
});

// Displays filters tab and animations when template rendered
Template.arts.rendered = function () {
	$('#filters').slideDown();
	$('#yourEvents').addClass('navselect');
	$('#arts').addClass('filterselect');
};

// Removes filters tabs and animations when template rendered
Template.arts.destroyed = function () {
	$('#filters').slideUp();
	$('#yourEvents').removeClass('navselect');
	$('#arts').removeClass('filterselect');
};