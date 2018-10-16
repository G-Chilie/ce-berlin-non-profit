'use strict';

let config = require('app/config/config');

module.exports.setup = function setup(app, serviceLocator) {

    let rhapsodyController = serviceLocator.get('rhapsodyController');
    let homeController = serviceLocator.get('homeController');
    app.get('/', (req, res, next) => homeController.index(req, res, next));
    app.get('/rhapsody-realities',  (req, res, next) => rhapsodyController.index(req, res, next));

    //Admin
    app.get('/admin/',  function (req, res, next) {
        res.render('admin_dashboard', {layout : 'admin_main'});
    });
    app.get('/admin/add-rhapsody-realities',  (req, res, next) => rhapsodyController.addNew(req, res, next));
};
