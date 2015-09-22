Template.myevents.events ({
	// clicking the trash can icon triggers this event
	'click .deletebutton': function(event) {
		event.preventDefault();
		// pop up window appears asking the user to confirm the deletion
		if (confirm("Delete this event?")) {
			// stores the id of this event in a local variable eventId
			var eventId = this._id;
			// call to methods to remove this event from the database
			Meteor.call('deleteEvent', eventId);
		}
	},

});
