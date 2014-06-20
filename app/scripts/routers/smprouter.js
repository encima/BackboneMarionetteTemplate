define([
	'backbone',
	'backbone.marionette',
	'controllers/smpcontroller'
],
function(Backbone, Marionette, smpcontroller){
    'use strict';

	return Backbone.Marionette.AppRouter.extend({
		/* Backbone routes hash */
		appRoutes: {
			"":"index",
			"/test":"index"
		},
		controller: smpcontroller
	});
});
