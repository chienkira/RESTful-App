var app = app || {};

(function (app) {
    app.TodoCollectionView = Backbone.View.extend({
        el: '#content',
        tagName: 'div',
        todoCollection: {},
        initialize: function () {
            this.todoCollection = new app.TodoCollection();
            this.todoCollection.on('add', this.addOne, this);
            this.$el.html($('#list-template').html());
            this.render();
        },
        render: function () {
            this.todoCollection.fetch();
            return this;
        },
        addOne: function (todo) {
            var itemView = new app.TodoItemView({
                model: todo
            });
            $('#todo-lists').append(itemView.render().el);
        },
    })
})(app);