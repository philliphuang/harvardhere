// publishes events from database to client according to inputted
// limits and only for events that haven't passed
Meteor.publish('events', function(options) {
	check(options, {
		limit: Number, 
		sort: Object
	});
 	var now = moment().format("YYYY-MM-DDTHH:mm");
	return Events.find({end:{$gte: now}}, options);
});

// publishes events from database to client according to inputted limits
Meteor.publish('myevents', function(options) {
	check(options, {
		limit: Number, 
		sort: Object
	});
	return Events.find({owner: this.userId}, options);
});

// publishes events from database to client according to inputted
// limits for food events that haven't passed
Meteor.publish('food', function(options) {
	check(options, {
		limit: Number, 
		sort: Object
 	});
 	var now = moment().format("YYYY-MM-DDTHH:mm");
	return Events.find({
		food: true, 
		end:{$gte: now}
	}, options);
});

// publishes events from database to client according to inputted
// limits and for music events that haven't passed
Meteor.publish('music', function(options) {
	check(options, {
		limit: Number, 
		sort: Object
 	});
	var now = moment().format("YYYY-MM-DDTHH:mm");
	return Events.find({
		music: true, 
		end:{$gte: now}
	}, options)});

// publishes events from database to client according to inputted
// limits and for art events that haven't passed
Meteor.publish('arts', function(options) {
	check(options, {
		limit: Number, 
		sort: Object
 	});
	var now = moment().format("YYYY-MM-DDTHH:mm");
	return Events.find({
		arts: true, 
		end:{$gte: now}
	}, options)});

// publishes events from database to client according to inputted
// limits and for hiring events that haven't passed
Meteor.publish('hiring', function(options) {
	check(options, {
		limit: Number, 
		sort: Object
 	});
	var now = moment().format("YYYY-MM-DDTHH:mm");
	return Events.find({
		hiring: true, 
		end:{$gte: now}
	}, options)});

// publishes events from database to client according to inputted
// limits and for informational events that haven't passed
Meteor.publish('info', function(options) {
	check(options, {
		limit: Number, 
		sort: Object
 	});
	var now = moment().format("YYYY-MM-DDTHH:mm");
	return Events.find({
		info: true, 
		end:{$gte: now}
	}, options)
});

// publishes events from database to client according to inputted
// limits and for famous people events that haven't passed
Meteor.publish('people', function(options) {
	check(options, {
		limit: Number, 
		sort: Object
 	});
	var now = moment().format("YYYY-MM-DDTHH:mm");
	return Events.find({
		people: true, 
		end:{$gte: now}
	}, options)
});

// publishes events from database to client according to inputted
// limits and for social events that haven't passed
Meteor.publish('social', function(options) {
	check(options, {
		limit: Number, 
		sort: Object
 	});
	var now = moment().format("YYYY-MM-DDTHH:mm");
	return Events.find({
		social: true, 
		end:{$gte: now}
	}, options)
});

// publishes events from database to client according to inputted
// limits and for sports events that haven't passed
Meteor.publish('sports', function(options) {
	check(options, {
		limit: Number, 
		sort: Object
 	});
	var now = moment().format("YYYY-MM-DDTHH:mm");
	return Events.find({
		sports: true, 
		end:{$gte: now}
	}, options)
});

// publishes events from database to client according to inputted
// limits and for other events that haven't passed
Meteor.publish('other', function(options) {
	check(options, {
		limit: Number, 
		sort: Object
 	});
	var now = moment().format("YYYY-MM-DDTHH:mm");
	return Events.find({
		other: true, 
		end:{$gte: now}
	}, options)
});
// publishes events from database to client according to inputted
// limits and for most popular events that haven't passed
Meteor.publish('favorites', function(options){
	check(options, {
		limit: Number, 
		sort: Object
 	});
	var now = moment().format("YYYY-MM-DDTHH:mm");
	return Events.find({end:{$gte: now}}, options);
});