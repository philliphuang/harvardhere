Template.form.events({ 
  // when form submitted
  'submit .new-event': function(event) {
    if (event.target.start.value > event.target.end.value)
    {
      // checks if dates make sense
      alert("Your event ends before it begins!");
      return false;
    }
    else
    {
      // stores values of checkboxes form
      var food = Session.get("foodChecked");
      var music = Session.get("musicChecked");
      var arts = Session.get("artsChecked");
      var hiring = Session.get("hiringChecked");
      var info = Session.get("infoChecked");
      var people = Session.get("peopleChecked");
      var social = Session.get("socialChecked");
      var sport = Session.get("sportsChecked");
      var other = Session.get("otherChecked");

      // inserts values of form into database
      var formContent = {
        name: event.target.name.value,
        start: event.target.start.value,
        end:event.target.end.value,
        location: event.target.location.value,
        link: event.target.link.value,
        description: event.target.descriptionform.value,
        owner: Meteor.userId(),
        email: Meteor.user().emails[0].address,
        food: food,
        music: music,
        arts: arts,
        hiring: hiring,
        info: info,
        people: people,
        social: social,
        sport: sport,
        other: other,
        upvoters: [],
        votes: 0
      };

      // resets checkboxes
      Session.set("foodChecked", false);
      Session.set("musicChecked", false);
      Session.set("artsChecked", false);
      Session.set("hiringChecked", false);
      Session.set("infoChecked", false);
      Session.set("peopleChecked", false);
      Session.set("socialChecked", false);
      Session.set("sportsChecked", false);
      Session.set("otherChecked", false);

      // inserts event into database
      Meteor.call('addEvent', formContent);

      // Prevent default form submit
      event.preventDefault();
      event.stopPropagation();

      // redirects to events page
      Router.go('content');
    }

  },

  // changes checkbox values when checked
  'change #food': function(event) {
    Session.set("foodChecked", event.target.checked);
  },

  'change #music': function(event) {
    Session.set("musicChecked", event.target.checked);
  },

  'change #arts': function(event) {
    Session.set("artsChecked", event.target.checked);
  },

  'change #hiring': function(event) {
    Session.set("hiringChecked", event.target.checked);
  },

  'change #info': function(event) {
    Session.set("infoChecked", event.target.checked);
  },

  'change #people': function(event) {
    Session.set("peopleChecked", event.target.checked);
  },

  'change #social': function(event) {
    Session.set("socialChecked", event.target.checked);
  },

  'change #sport': function(event) {
    Session.set("sportsChecked", event.target.checked);
  },

  'change #other': function(event) {
    Session.set("otherChecked", event.target.checked);
  },
});


Template.form.helpers({
  // obtains current state of checkboxes
  foodChecked: function () {
    return Session.get("foodChecked");
  },

  musicChecked: function () {
    return Session.get("musicChecked");
  },

  artsChecked: function () {
    return Session.get("artsChecked");
  },

  hiringChecked: function () {
    return Session.get("hiringChecked");
  },

  infoChecked: function () {
    return Session.get("infoChecked");
  },

  peopleChecked: function () {
    return Session.get("peopleChecked");
  },

  socialChecked: function () {
    return Session.get("socialChecked");
  },

  sportChecked: function () {
    return Session.get("sportsChecked");
  },

  otherChecked: function () {
    return Session.get("otherChecked");
  },
});

// checks if form rendered 
Template.form.rendered = function () {
  // change button appearance in CSS
  $('#addPublicEvent').addClass('navselect');
};

// checks if form destroyed
Template.form.destroyed = function () {
  // change button appearance in CSS
  $('#addPublicEvent').removeClass('navselect');
};
