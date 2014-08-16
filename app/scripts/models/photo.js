/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var PhotoModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
            name: 'photo name',
            urlBefore: '',
            urlAfter: ''
        }

    });

    return PhotoModel;
});
