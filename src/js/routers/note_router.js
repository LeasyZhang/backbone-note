/**
 * Created by leasy on 16/6/15.
 */
"use strict";

window.APP = window.APP || {};
APP.NoteRouter = Backbone.Router.extend({
    routes: {
        "note/new": "create",
        "notes/index": "index",
        "note/:id/edit": "edit",
        "node/:id/delete": "delete"
    },

    $container: $("#primary-content"),

    initialize: function () {
        this.collection = new APP.NoteCollection();
        this.collection.fetch({ajaxSync: false});
        APP.helpers.debug(this.collection);
        this.index();

        Backbone.history.start();
    },

    create: function () {

    },

    delete: function () {

    },

    edit: function () {

    },

    index: function () {
        var view = new APP.NoteIndexView({collection : this.collection});
        this.$container.html(view.render().el);
    }
});