Template.people.helpers({
	// Finds events from database
	peoples: function () {
		// Finds and formats current time
		var now = moment().format("YYYY-MM-DDTHH:mm");
		// Returns current and future people events
		return Events.find({end:{$gte: now}, people: true});
	}
});

// Displays filters tab and animations when template rendered
Template.people.rendered = function () {
	$('#filters').slideDown();
	$('#yourEvents').addClass('navselect');
	$('#people').addClass('filterselect');
};

// Removes filters tabs and animations when template rendered
Template.people.destroyed = function () {
	$('#filters').slideUp();
	$('#yourEvents').removeClass('navselect');
	$('#people').removeClass('filterselect');
};