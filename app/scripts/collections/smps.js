define([
	'backbone',
	'models/smp'
],
function( Backbone, Smp ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a Smps collection");
		},

		model: Smp
		
	});
});
