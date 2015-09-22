Template.info.helpers({
	// Finds events from database
	infos: function () {
		// Finds and formats current time
		var now = moment().format("YYYY-MM-DDTHH:mm");
		// Returns current and future info events
		return Events.find({end:{$gte: now}, info: true});
	}
});

// Displays filters tab and animations when template rendered
Template.info.rendered = function () {
	$('#filters').slideDown();
	$('#yourEvents').addClass('navselect');
	$('#info').addClass('filterselect');
};

// Removes filters tabs and animations when template rendered
Template.info.destroyed = function () {
	$('#filters').slideUp();
	$('#yourEvents').removeClass('navselect');
	$('#info').removeClass('filterselect');
};