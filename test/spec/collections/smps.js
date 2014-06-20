(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/smps'
		],
		function( Smps ) {

			describe('Smps Collection', function () {

				it('should be an instance of Smps Collection', function () {
					var smps = new Smps();
					expect( smps ).to.be.an.instanceof( Smps );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );