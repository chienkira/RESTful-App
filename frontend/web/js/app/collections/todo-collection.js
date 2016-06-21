var app = app || {};

(function(app) {
    app.TodoCollection = Backbone.Collection.extend({
        url : '/RESTfulApp/api/web/v1/countries',
        model : app.TodoModel,

        parse : function(response) {
            return response;
        }
    });
})(app);