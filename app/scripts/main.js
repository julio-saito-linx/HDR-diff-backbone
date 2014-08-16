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
        imageReveal: {
            deps: ['jquery']
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        handlebars: '../bower_components/handlebars/handlebars',
        imageReveal: 'vendor/jquery.imageReveal'
    }
});

require([
    'backbone',
    'models/photo',
    'views/diff'
], function (Backbone, Photo, DiffView) {
    
    var currentIndex = 0;
    var photoModels = [
        new Photo({
            urlBefore: 'images/Ipe/IMG_9456.jpg',
            urlAfter: 'images/Ipe/IMG_9456_7_8_tonemapped.jpg'
        }),
        new Photo({
            urlBefore: 'images/Ipe/IMG_9459.jpg',
            urlAfter: 'images/Ipe/IMG_9459_60_61_fused.jpg'
        }),
        new Photo({
            urlBefore: 'images/Ipe/IMG_9491.jpg',
            urlAfter: 'images/Ipe/IMG_9491_2_3_tonemapped.jpg'
        }),
        new Photo({
            urlBefore: 'images/Ipe/IMG_9494.jpg',
            urlAfter: 'images/Ipe/IMG_9494_5_6_tonemapped.jpg'
        }),
        new Photo({
            urlBefore: 'images/Latife/IMG_8195.jpg',
            urlAfter: 'images/Latife/IMG_8195_6_7.jpg'
        }),
        new Photo({
            urlBefore: 'images/Latife/IMG_8278-001.jpg',
            urlAfter: 'images/Latife/IMG_8278_79_80-001.jpg'
        }),
        new Photo({
            urlBefore: 'images/Latife/IMG_8332.jpg',
            urlAfter: 'images/Latife/IMG_8332_3_4.jpg'
        }),
        new Photo({
            urlBefore: 'images/Paulo/IMG_8049.jpg',
            urlAfter: 'images/Paulo/IMG_8049_50_51_creative.jpg'
        }),
        new Photo({
            urlBefore: 'images/Paulo/IMG_8049.jpg',
            urlAfter: 'images/Paulo/IMG_8049_50_51_painterly5.jpg'
        }),
        new Photo({
            urlBefore: 'images/Paulo/IMG_8049.jpg',
            urlAfter: 'images/Paulo/IMG_8049_50_51_photographic.jpg'
        }),
        new Photo({
            urlBefore: 'images/Paulo/IMG_8049.jpg',
            urlAfter: 'images/Paulo/IMG_8049_50_51_surreal.jpg'
        }),
        new Photo({
            urlBefore: 'images/Relicarios/IMG_9534.jpg',
            urlAfter: 'images/Relicarios/IMG_9534_5_6_tonemapped.jpg'
        }),
        new Photo({
            urlBefore: 'images/Relicarios/IMG_9537.jpg',
            urlAfter: 'images/Relicarios/IMG_9537_8_9_fused.jpg'
        }),
        new Photo({
            urlBefore: 'images/Relicarios/IMG_9543.jpg',
            urlAfter: 'images/Relicarios/IMG_9543_4_5_tonemapped.jpg'
        }),
        new Photo({
            urlBefore: 'images/Relicarios/IMG_9546.jpg',
            urlAfter: 'images/Relicarios/IMG_9546_7_8_fused.jpg'
        }),
        new Photo({
            urlBefore: 'images/Xuxu/IMG_9091.jpg',
            urlAfter: 'images/Xuxu/IMG_9091_2_3_tonemapped.jpg'
        }),
        new Photo({
            urlBefore: 'images/Xuxu/IMG_9094.jpg',
            urlAfter: 'images/Xuxu/IMG_9094_5_6_tonemapped.jpg'
        }),
        new Photo({
            urlBefore: 'images/Xuxu/IMG_9106.jpg',
            urlAfter: 'images/Xuxu/IMG_9106_7_8_tonemapped.jpg'
        }),
        new Photo({
            urlBefore: 'images/Xuxu/IMG_9109.jpg',
            urlAfter: 'images/Xuxu/IMG_9109_10_11_tonemapped.jpg'
        }),


    ];

    var renderView = function(i) {
        // start the view
        var diffView = new DiffView({
            model: photoModels[i]
        });
        diffView.render();
        $('.compare-photos-section').html(diffView.el);
    };


    // button events
    $('button[role=previous]').on('click', function() {
        currentIndex--;
        renderView(currentIndex % photoModels.length);
    });
    $('button[role=next]').on('click', function() {
        currentIndex++;
        renderView(currentIndex % photoModels.length);
    });

    renderView(currentIndex);


    Backbone.history.start();
});
