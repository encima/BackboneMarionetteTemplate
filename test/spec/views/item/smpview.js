(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/smpview'
		],
		function( Smpview ) {

			describe('Smpview Itemview', function () {

				it('should be an instance of Smpview Itemview', function () {
					var smpview = new Smpview();
					expect( smpview ).to.be.an.instanceof( Smpview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );