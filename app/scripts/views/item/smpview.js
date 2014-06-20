define([
	'backbone',
	'hbs!tmpl/item/smpview_tmpl'
],
function( Backbone, SmpviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Smpview ItemView");
		},
		
    	template: SmpviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
