define([
	'backbone',
	'views/item/smpview',
	'hbs!tmpl/composite/smpcompview_tmpl'
],
function( Backbone, Smpview, SmpcompviewTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log("initialize a Smpcompview CompositeView");
		},
		
    	itemView: Smpview,
    	
    	template: SmpcompviewTmpl,
    	

    	/* ui selector cache */
    	ui: {},

    	/* where are we appending the items views */
    	itemViewContainer: "",

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
