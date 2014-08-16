/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        image_reveal: {
            deps: ['jquery']
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        handlebars: '../bower_components/handlebars/handlebars',
        image_reveal: 'vendor/jquery.imageReveal'
    }
});

require([
    'backbone',
    'models/photo',
    'views/diff'
], function (Backbone, Photo, DiffView) {
    
    var photoModel = new Photo({
        urlBefore: '/images/Xuxu/IMG_9109.JPG',
        urlAfter: '/images/Xuxu/IMG_9109_10_11_tonemapped.JPG'
    })

    // start the view
    var diffView = new DiffView({
        model: photoModel
    })

    diffView.render();
    $('.compare-photos-section').html(diffView.el)

    Backbone.history.start();
});
