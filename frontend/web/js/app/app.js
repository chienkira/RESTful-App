var app = app || {};

(function(app) {
    var todoRouter = new app.TodoRouter();
    Backbone.history.start();
})(app);