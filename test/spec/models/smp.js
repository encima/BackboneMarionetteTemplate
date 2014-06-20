(function() {
	'use strict';

	var root = this;

	root.define([
		'models/smp'
		],
		function( Smp ) {

			describe('Smp Model', function () {

				it('should be an instance of Smp Model', function () {
					var smp = new Smp();
					expect( smp ).to.be.an.instanceof( Smp );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );