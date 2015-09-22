Template.food.helpers({
	// Finds events from database
	foods: function () {
		// Finds and formats current time
		var now = moment().format("YYYY-MM-DDTHH:mm");
		// Returns current and future food events
		return Events.find({end:{$gte: now}, food: true});
	}
});

// Displays filters tab and animations when template rendered
Template.food.rendered = function () {
	$('#filters').slideDown();
	$('#yourEvents').addClass('navselect');
	$('#food').addClass('filterselect');
};

// Removes filters tabs and animations when template rendered
Template.food.destroyed = function () {
	$('#filters').slideUp();
	$('#yourEvents').removeClass('navselect');
	$('#food').removeClass('filterselect');
};