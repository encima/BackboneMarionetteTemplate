define([
	'backbone',
	'communicator'
	// 'hbs!tmpl/welcome'
],

function( Backbone, Communicator) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	App.addInitializer(function () {
        Backbone.history.start();
    });

	/* Add application regions here */
	App.addRegions({
		page: '#page-wrapper'
	});

	/* Add initializers here */
	// App.addInitializer( function () {
	// 	document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });
	// 	Communicator.mediator.trigger("APP:START");
	// });

	return App;
});
