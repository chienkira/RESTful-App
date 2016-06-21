var app = app || {};

(function(app) {
    app.TodoCollectionView = Backbone.View.extend({
        todoCollection : {},
        initialize : function() {
            this.todoCollection = new app.TodoCollection()
            this.render();
        },
        render : function() {
            this.todoCollection.fetch();
            return this;
        },
    })
})(app);