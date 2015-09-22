Template.event.events({
	// animates the event bottom div so a drop down menu with more information appears when an event is clicked
	'click .eventcenter': function(event){
		$(event.currentTarget).children('.eventbot').slideToggle();
	},
	
	// upvotable and disabled click events adapted from
	// Discover Meteor: Building Real-Time JavaScript Web Apps. 28 Oct. 2014. PDF.
    
    // executes a Method call to the upvote function when the upvote button on an event
    // is clicked for the first time
	'click .upvotable': function(event) {
        event.stopImmediatePropagation()
        event.preventDefault();
        Meteor.call('upvote', this._id); 
    },
    // removes an upvote from a previously upvoted event
    'click .disabled': function(event) {
        event.stopImmediatePropagation()
        event.preventDefault();
        Meteor.call('downvote', this._id);
    }
});

Template.event.helpers({
    // pretty prints start time/date
    start: function () {
        return moment(this.start).format("ddd, MMM Do, YYYY, h:mm A");
    },
    // pretty prints end time/date
    end: function () {
        return moment(this.end).format("ddd, MMM Do, YYYY, h:mm A");
    },
    // calculates time until parameter
    timeuntil: function () {
        //finds current time
        var now = moment().format("YYYY-MM-DDTHH:mm");
        // event past
        if (this.end < now) {
            return moment(this.start).fromNow();
        }
        // event yet to occur
        else if (this.start > now){
            return "In " + moment(this.start).fromNow(true);
        }
        // happening now
        else {
            var happening = "Right Now";
            return happening;
        }
    },
    // creates a class for the upvote button that determines whether or not a user can still upvote an event
    upvotedClass: function() {
        var userId = Meteor.userId();
        // checks that the userId is not in the upvoters array for this event to determine that the user can still upvote
        if (userId && !_.include(this.upvoters, userId)) {
            return 'btn-primary upvotable'; 
        } else {
            // sets the button class to disabled if the user has already upvoted the event
            return 'disabled'; }
    }
});
