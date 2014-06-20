(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/smpcontroller'
		],
		function( Smpcontroller ) {

			describe('Smpcontroller Controller', function () {

				it('should be an instance of Smpcontroller Controller', function () {
					var smpcontroller = new Smpcontroller();
					expect( smpcontroller ).to.be.an.instanceof( Smpcontroller );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );