var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
//  when Route is for main page. 
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController',
            resolve: {
                app: function () {
                    window.scrollTo(0, 0);
                    $('#pageTitle').html('HOME');
                }
            }
        });
});
