  Template.myevents.helpers({
    // Finds events that you created from database
    myevents: function () {
  		return Events.find({owner: Meteor.userId()});
    }
  });

// checks if my events button is clicked and changes appearance
Template.myevents.rendered = function () {
	$('#myEvents').addClass('navselect');
};

// checks if exited from my events page and changes appearance back
Template.myevents.destroyed = function () {
	$('#myEvents').removeClass('navselect');
};