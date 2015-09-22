Template.sports.helpers({
	// Finds events from database
	sports: function () {
		// Finds and formats current time
		var now = moment().format("YYYY-MM-DDTHH:mm");
		// Returns current and future sports events
		return Events.find({end:{$gte: now}, sport: true});
	}
});

// Displays filters tab and animations when template rendered
Template.sports.rendered = function () {
	$('#filters').slideDown();
	$('#yourEvents').addClass('navselect');
	$('#sports').addClass('filterselect');
};

// Removes filters tabs and animations when template rendered
Template.sports.destroyed = function () {
	$('#filters').slideUp();
	$('#yourEvents').removeClass('navselect');
	$('#sports').removeClass('filterselect');
};