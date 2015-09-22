/*
 * Iron Router configurations adapted from Coleman, Tom, and Sacha Greif. 
 * Discover Meteor: Building Real-Time JavaScript Web Apps. 28 Oct. 2014. PDF.
 */

// defines templates to be used at different times
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

// implements infinite pagination
MyeventsController = RouteController.extend({ 
	// defines the template to be loaded
	template: 'myevents',

	//number of events that user can see more of each time the link is clicked
	increment: 10,

	// defines number of events visible currently
	myeventsLimit: function() {
		return parseInt(this.params.myeventsLimit) || this.increment; 
	},
	// limits events visible and sorts by soonest event
	findOptions: function() {
		return {
			limit: this.myeventsLimit(), 
			sort: {start: 1}
		};
	},
	// subscribes to the database for events
	subscriptions: function() {
		this.eventsSub = Meteor.subscribe('myevents', this.findOptions()); 
	},
	// looks for your created events with the above parameters
	items: function() {
		return Events.find({owner: Meteor.userId()}, this.findOptions());
	},
	data: function() {
		// checks if more events exist than the number visible
		var hasMore = this.items().count() === this.myeventsLimit();
		
		// determines next increment of events shown
		var nextPath = this.route.path({myeventsLimit: this.myeventsLimit() + this.increment});
		return {
			items: this.items(),

			// checks if events loaded already, else displays loading template in HTML
			ready: this.eventsSub.ready,

			// determines if next path exists
			nextPath: hasMore ? nextPath : null
		}; 
	}
});
// defines url route for myevents template
Router.route('/myevents/:myeventsLimit?', {
	name: 'myevents'
});

// mimics myevents route controller features except filtered by food
FoodController = MyeventsController.extend({
	template: 'food',
	subscriptions: function() {
		this.eventsSub = Meteor.subscribe('food', this.findOptions()); 
	},
	items: function() {
		// formats current date
		var now = moment().format("YYYY-MM-DDTHH:mm");

		//sorts by food only in events that haven't passed
		return Events.find({end: {$gte: now}, food: true}, this.findOptions());
	},
});

// defines url route for food template
Router.route('/food/:myeventsLimit?', {
	name: 'food'
});

// mimics myevents route controller features except filtered by music
MusicController = MyeventsController.extend({
	template: 'music',
	subscriptions: function() {
		this.eventsSub = Meteor.subscribe('music', this.findOptions()); 
	},
	items: function() {
		var now = moment().format("YYYY-MM-DDTHH:mm");
		return Events.find({end:{$gte: now}, music: true}, this.findOptions());
	},
});

// defines url route for music template
Router.route('/music/:myeventsLimit?', {
	name: 'music'
});

// mimics myevents route controller features except filtered by arts
ArtsController = MyeventsController.extend({
	template: 'arts',
	subscriptions: function() {
		this.eventsSub = Meteor.subscribe('arts', this.findOptions()); 
	},
	items: function() {
		var now = moment().format("YYYY-MM-DDTHH:mm");
		return Events.find({end: {$gte: now}, arts: true}, this.findOptions());
	},
});

// defines url route for arts template
Router.route('/arts/:myeventsLimit?', {
	name: 'arts'
});

// mimics myevents route controller features except filtered by hiring
HiringController = MyeventsController.extend({
	template: 'hiring',
	subscriptions: function() {
		this.eventsSub = Meteor.subscribe('hiring', this.findOptions()); 
	},
	items: function() {
		var now = moment().format("YYYY-MM-DDTHH:mm");
		return Events.find({end: {$gte: now}, hiring: true}, this.findOptions());
	},
});

// defines url route for hiring template
Router.route('/hiring/:myeventsLimit?', {
	name: 'hiring'
});

// mimics myevents route controller features except filtered by informational events
InfoController = MyeventsController.extend({
	template: 'info',
	subscriptions: function() {
		this.eventsSub = Meteor.subscribe('info', this.findOptions()); 
	},
	items: function() {
		var now = moment().format("YYYY-MM-DDTHH:mm");
		return Events.find({end: {$gte: now}, info: true}, this.findOptions());
	},
});

// defines url route for info template
Router.route('/info/:myeventsLimit?', {
	name: 'info'
});

// mimics myevents route controller features except filtered by famous people
PeopleController = MyeventsController.extend({
	template: 'people',
	subscriptions: function() {
		this.eventsSub = Meteor.subscribe('people', this.findOptions()); 
	},
	items: function() {
		var now = moment().format("YYYY-MM-DDTHH:mm");
		return Events.find({end: {$gte: now}, people: true}, this.findOptions());
	},
});

// defines url route for people template
Router.route('/people/:myeventsLimit?', {
	name: 'people'
});

// mimics myevents route controller features except filtered by social
SocialController = MyeventsController.extend({
	template: 'social',
	subscriptions: function() {
		this.eventsSub = Meteor.subscribe('social', this.findOptions()); 
	},
	items: function() {
		var now = moment().format("YYYY-MM-DDTHH:mm");
		return Events.find({end: {$gte: now}, social: true}, this.findOptions());
	},
});

// defines url route for social template
Router.route('/social/:myeventsLimit?', {
	name: 'social'
});

// mimics myevents route controller features except filtered by sports
SportsController = MyeventsController.extend({
	template: 'sports',
	subscriptions: function() {
		this.eventsSub = Meteor.subscribe('sports', this.findOptions()); 
	},
	items: function() {
		var now = moment().format("YYYY-MM-DDTHH:mm");
		return Events.find({end: {$gte: now}, sports: true}, this.findOptions());
	},
});

// defines url route for sports template
Router.route('/sports/:myeventsLimit?', {
	name: 'sports'
});

// mimics myevents route controller features except filtered by other events
OtherController = MyeventsController.extend({
	template: 'other',
	subscriptions: function() {
		this.eventsSub = Meteor.subscribe('other', this.findOptions()); 
	},
	items: function() {
		var now = moment().format("YYYY-MM-DDTHH:mm");
		return Events.find({end: {$gte: now}, other: true}, this.findOptions());
	},
});

// defines url route for other template
Router.route('/other/:myeventsLimit?', {
	name: 'other'
});

// mimics myevents route controller features except sorted by number of votes
FavoritesController = MyeventsController.extend({
	template: 'favorites',
	findOptions: function() {
		return {
			limit: this.myeventsLimit(), 
			sort: {votes: -1}
		};
	},
	subscriptions: function() {
		this.eventsSub = Meteor.subscribe('favorites', this.findOptions()); 
	},
	items: function() {
		var now = moment().format("YYYY-MM-DDTHH:mm");
		return Events.find({end:{$gte: now}}, this.findOptions());
	},
});

// defines url route for most popular post
Router.route('/popular/:myeventsLimit?', { 
	name: 'favorites'
});

// defines url route for event submission form
Router.route('/form', { 
	name: 'form'
});

// checks if user logged in, else denies access
var requireLogin = function() { 
	if (! Meteor.user()) {
		if (Meteor.loggingIn()) { 
			this.render('loading');
		} 
		else { 
			this.render('accessDenied');	
		} 
	}
	else {
		this.next(); 
	}
};

// defines the templates requiring login
Router.onBeforeAction(requireLogin, {only: 'myevents'});
Router.onBeforeAction(requireLogin, {only: 'form'});
Router.onBeforeAction(requireLogin, {only: 'eventedit'});

// defines url route for about page
Router.route('/about', {
	name: 'about'
});

// defines url route for search box
Router.route('/search', {
	name: 'search'
});

// defines controller for event content by replacing myevents controller fields
ContentController = MyeventsController.extend({ 
	template: 'content',
	increment: 10,
	eventsLimit: function() {
		return parseInt(this.params.eventsLimit) || this.increment; 
	},
	// limits events and sorts by earliest date
	findOptions: function() {
		return {limit: this.eventsLimit(),
				sort: {start: 1}};
	},
	subscriptions: function() {
		this.eventsSub = Meteor.subscribe('events', this.findOptions()); 
	},
	items: function() {
		var now = moment().format("YYYY-MM-DDTHH:mm");
		return Events.find({end:{$gte: now}}, this.findOptions());
	},
	data: function() {
		var hasMore = this.items().count() === this.eventsLimit();
		var nextPath = this.route.path({eventsLimit: this.eventsLimit() + this.increment});
		return {
			items: this.items(),
			ready: this.eventsSub.ready,
			nextPath: hasMore ? nextPath : null
		}; 
	}
});

// defines url route for main event page
Router.route('/:eventsLimit?', {
	name: 'content'
});
