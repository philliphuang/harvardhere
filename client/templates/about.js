// Displays navbar selected class when created
Template.about.rendered = function () {
	$('#about').addClass('navselect');
};

// Turns off navbar selected class when destroyed
Template.about.destroyed = function () {
	$('#about').removeClass('navselect');
};