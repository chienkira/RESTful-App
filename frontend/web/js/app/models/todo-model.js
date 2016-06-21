var app = app || {};

(function(app) {
    app.TodoModel = Backbone.Model.extend({
        urlRoot : '/RESTfulApp/api/web/v1/countries',
        parse : function(response) {
            console.log(response);
            return response;
        }
    });
})(app);