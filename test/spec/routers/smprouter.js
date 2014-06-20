(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/smprouter'
		],
		function( Smprouter ) {

			describe('Smprouter Router', function () {

				it('should be an instance of Smprouter Router', function () {
					var smprouter = new Smprouter();
					expect( smprouter ).to.be.an.instanceof( Smprouter );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );