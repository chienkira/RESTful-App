var app = app || {};

(function (app) {
    app.TodoItemView = Backbone.View.extend({
        tagName: 'tr',
        template: _.template($('#item-template').html()),
        initialize: function () {
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
    });
})(app);