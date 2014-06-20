require([
	'backbone',
	'application',
	'routers/smprouter',
	'controllers/smpcontroller',
	'regionManager'
],
function ( Backbone, App, AppRouter, AppController ) {
    'use strict';
    App.appRouter = new AppRouter({
    	controller: new AppController()
    });
    console.log('Starting App');
    App.start();
});
