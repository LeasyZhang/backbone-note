/**
 * Created by leasy on 16/6/15.
 */
"use strict";

APP.NoteEditView = Backbone.View.extend({

    events: {
        "click button.save": "save"
    },

    template: _.template($('#formTemplate').html()),

    initialize: function (options) {
        this.model.bind('invalid', APP.helpers.showErrors, APP.helpers);
        this.model.bind('invalid', this.invalid, this);
    },

    invalid: function () {
        this.$el.find('a.cancel').hide();
    },

    save: function (event) {
        event.stopPropagation();
        event.preventDefault();

        this.model.set({
            title: this.$el.find('input[name=title]').val(),
            author: this.$el.find('input[name=author]').val(),
            description: this.$el.find('textarea[name=description]').val()
        });

        if (this.model.isValid()) {
            this.model.save();
            // redirect back to the index
            Backbone.history.navigate('notes/index', {trigger: true});
        }
    },

    render: function () {
        this.$el.html(
            this.template(this.model.toJSON())
        );
        return this;
    }
});