Template.hiring.helpers({
	// Finds events from database
	hirings: function () {
		// Finds and formats current time
		var now = moment().format("YYYY-MM-DDTHH:mm");
		// Returns current and future hiring events
		return Events.find({end:{$gte: now}, hiring: true});
	}
});

// Displays filters tab and animations when template rendered
Template.hiring.rendered = function () {
	$('#filters').slideDown();
	$('#yourEvents').addClass('navselect');
	$('#hiring').addClass('filterselect');
};

// Removes filters tabs and animations when template rendered
Template.hiring.destroyed = function () {
	$('#filters').slideUp();
	$('#yourEvents').removeClass('navselect');
	$('#hiring').removeClass('filterselect');
};