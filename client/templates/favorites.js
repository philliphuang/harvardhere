Template.favorites.helpers({
// Finds events from database by most popular, excluding old events
	favorites: function () {
		// Finds and formats current time
		var now = moment().format("YYYY-MM-DDTHH:mm");
		// Returns current and future events with most likes
	  	return Events.find({end:{$gte: now}}, {sort: {votes: -1}});
	}
});

// checks if favorites button selected and changes appearance
Template.favorites.rendered = function () {
	$('#Favorites').addClass('navselect');
};

// checks if favorites button unselected and changes appearance back
Template.favorites.destroyed = function () {
	$('#Favorites').removeClass('navselect');
};