var app = app || {};

(function (app) {
    app.TodoItemView = Backbone.View.extend({
        tagName: 'tr',
        template: _.template($('#item-template').html()),
        initialize: function () {
            this.listenTo(this.model, 'destroy', this.remove);
        },
        events: {
            'click .remove-link': 'onRemoveClick',
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        
        onRemoveClick: function (e) {
            this.model.destroy({
                wait: true
            });
        },
    });
})(app);