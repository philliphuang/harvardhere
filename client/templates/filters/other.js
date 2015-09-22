Template.other.helpers({
	// Finds events from database
	others: function () {
		// Finds and formats current time
		var now = moment().format("YYYY-MM-DDTHH:mm");
		// Returns current and future other events
		return Events.find({end:{$gte: now}, other: true});
	}
});

// Displays filters tab and animations when template rendered
Template.other.rendered = function () {
	$('#filters').slideDown();
	$('#yourEvents').addClass('navselect');
	$('#other').addClass('filterselect');
};

// Removes filters tabs and animations when template rendered
Template.other.destroyed = function () {
	$('#filters').slideUp();
	$('#yourEvents').removeClass('navselect');
	$('#other').removeClass('filterselect');
};