/**
 * Created by leasy on 16/6/15.
 */
"use strict";

APP.NoteIndexView = Backbone.View.extend({

    template: _.template($('#indexTemplate').html()),

    render: function(){
        this.$el.html(this.template({notes: this.collection.toJSON()}));
        return this;
    }
});