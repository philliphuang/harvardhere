Template.content.helpers({
	// Finds events from database
	events: function () {
		// Finds and formats current time
		var now = moment().format("YYYY-MM-DDTHH:mm");
		// Returns all current and future events
	    return Events.find({end:{$gte: now}});
	},
});

// Displays filters tab and animations when template rendered
Template.content.rendered = function () {
	$('#filters').slideDown();
	$('#yourEvents').addClass('navselect');
	$('#allfilter').addClass('filterselect');
};

// Removes filters tabs and animations when template rendered
Template.content.destroyed = function () {
	$('#filters').slideUp();
	$('#yourEvents').removeClass('navselect');
	$('#allfilter').removeClass('filterselect');
};