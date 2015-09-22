// creates Events database
Events = new Mongo.Collection("events");

Meteor.methods({
  // add event method
  addEvent: function (event) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    } 
    Events.insert(event);
  },
  // delete event method
  deleteEvent: function (event) {
    Events.remove(event);
  },
  
  /*
   * upvote and downvote functions adapted from Coleman, Tom, and Sacha Greif. 
   * Discover Meteor: Building Real-Time JavaScript Web Apps. 28 Oct. 2014. PDF.
   */
  upvote: function(eventId) { 
        // check that the userId of the logged in user is a string
        check(this.userId, String);
        // check that the eventId of the event being upvoted is a string 
        check(eventId, String);
        
        // select this eventId from the collection and store its contents in a local variable
        var event = Events.findOne(eventId); 
        // throw an error if this eventId is not in the collection
        if (!event)
            throw new Meteor.Error('invalid', 'Event not found'); 
        
        // check upvoters array for an event for this userId to make sure that user only upvotes once
        if (_.include(event.upvoters, this.userId))
            throw new Meteor.Error('invalid', 'Already upvoted this event');
        
        Events.update(event._id, {
            // add this userId to the array of upvoters for this event
            $addToSet: {upvoters: this.userId}, 
            // increase the number of votes for this event by one
            $inc: {votes: 1}
        });
  },
  downvote: function(eventId) { 
      // check that the userId of the logged in user is a string
      check(this.userId, String);
      // check that the eventId of the event being upvoted is a string 
      check(eventId, String);
      
      // select this eventId from the collection and store its contents in a local variable
      var event = Events.findOne(eventId); 
      // throw an error if this eventId is not in the collection
      if (!event)
          throw new Meteor.Error('invalid', 'Event not found'); 
      Events.update(event._id, {
          // add this userId to the array of upvoters for this event
          $pull: {upvoters: this.userId}, 
          // decrease the number of votes for this event by one
          $inc: {votes: -1}
      });
  }

});
