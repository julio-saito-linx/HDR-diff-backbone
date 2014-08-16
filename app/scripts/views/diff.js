/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'imageReveal'
], function ($, _, Backbone, JST, imageReveal) {
    'use strict';

    var DiffView = Backbone.View.extend({
        template: JST['app/scripts/templates/diff.hbs'],

        tagName: 'div',

        id: 'diffPhotos',

        className: 'imageReveal col-xs-12',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            var photosDiv = this.$el.find('#photos');

            photosDiv.imageReveal({
                barWidth: 10,
                touchBarWidth: 30,
                paddingLeft: 0,
                paddingRight: 0,
                startPosition: 0.2,
                showCaption: true,
                captionChange: 0.5,
                captionFade: 1000,
                linkCaption: true,
                width: 910,
                height: 607
            });
        },

        previous: function() {
            console.log('previous')
        }
    });

    return DiffView;
});
