/**
* Dependencies.
*/
var requireDirectory = require('require-directory');

module.exports = function(server) {
    // Bootstrap your controllers so you dont have to load them individually. This loads them all into the controller name space. https://github.com/troygoode/node-require-directory
    var controller = requireDirectory(module, './server/controllers');

    // Array of routes for Hapi
    var routeTable = [
        {   
            method: 'GET',
            path: '/authenticate/google',   //Google redirect URI
            config: controller.base.googleauth
        },


        {
            method: ['GET', 'POST'],
            path: '/login',
            config: controller.base.login
           
        },   

        {
            method: 'GET',
            path: '/logout',
            config: controller.base.logout
            

        },   

        {
            method: 'GET',
            path: '/',
            config: controller.base.index
            
        },       
        {
            method: 'GET',
            path: '/getdata',
            config: controller.base.getdata
        }/*,        
        {
            method: 'GET',
            path: '/{path*}',
            config: controller.base.missing
        },
        {
            method: 'GET',
            path: '/partials/{path*}',
            config: controller.assets.partials
        },
        {
            method: 'GET',
            path: '/images/{path*}',
            config: controller.assets.images
        },
        {
            method: 'GET',
            path: '/css/{path*}',
            config: controller.assets.css
        },
        {
            method: 'GET',
            path: '/js/{path*}',
            config: controller.assets.js
        },
        {
            method: 'GET',
            path: '/bower_components/{path*}',
            config: controller.assets.bower
        }*/
    ];
    return routeTable;
}
