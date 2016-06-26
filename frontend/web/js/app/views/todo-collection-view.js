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

            this.newTodoCode = this.$('#new-todo-code');
            this.newTodoName = this.$('#new-todo-name');
            this.newTodoPopulation = this.$('#new-todo-population');

            this.render();
        },
        events: {
            'click #addTodo': 'onCreateTodo',
        },
        render: function () {
            this.todoCollection.fetch();
            return this;
        },

        onCreateTodo: function (e) {
            if (this.newTodoCode.val().trim() != "" && this.newTodoName.val().trim() != "") {
                this.todoCollection.create(this.createDataForNewItem(), {
                    wait: true
                });
                this.newTodoCode.val('');
                this.newTodoName.val('');
                this.newTodoPopulation.val('');
            }
            else {
                alert('Please fill in form above');
            }
        },
        addOne: function (todo) {
            var itemView = new app.TodoItemView({
                model: todo
            });
            $('#todo-lists').append(itemView.render().el);
        },
        createDataForNewItem: function () {
            return {
                code        : this.newTodoCode.val().trim(),
                name        : this.newTodoName.val().trim(),
                population  : (this.newTodoPopulation.val().trim() == "") ? 0 : this.newTodoPopulation.val().trim(),
            }
        },
    })
})(app);