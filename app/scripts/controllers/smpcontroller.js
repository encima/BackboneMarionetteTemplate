define([
	'backbone',
	'application',
	'views/item/smpview'
],
function( Backbone, App, smpView ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
		},
		index: function() {
			console.log('Controller index');
			var sv = new smpView();
			App.page.show(sv);
		}
	});

});
