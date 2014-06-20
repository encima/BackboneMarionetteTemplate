(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/smpcompview'
		],
		function( Smpcompview ) {

			describe('Smpcompview Compositeview', function () {

				it('should be an instance of Smpcompview Compositeview', function () {
					var smpcompview = new Smpcompview();
					expect( smpcompview ).to.be.an.instanceof( Smpcompview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );