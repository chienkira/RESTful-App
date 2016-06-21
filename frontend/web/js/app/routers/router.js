var app = app || {};

(function(app) {
    app.TodoRouter = Backbone.Router.extend({
        routes : {
            ''                  : 'todoLists',
            'todo-lists'        : 'todoLists',
            'todo-lists/:id'    : 'todoDetail'
        },
        todoLists : function() {
            new app.TodoCollectionView();
        },
        todoDetail : function(id) {
            alert('Thong tin TODO của id = ' + id);
        },
    });
})(app);