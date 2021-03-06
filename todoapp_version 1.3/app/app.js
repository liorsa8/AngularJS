var main = angular.module("mainModule", ["ngRoute"]);
main.config(routeConfig);
routeConfig.$inject = ["$routeProvider", '$locationProvider'];
function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
        .when("/home", {
        templateUrl: '/app/pages/home.html',
        controller: 'todoListController'
    })
        .when("/contact", {
        templateUrl: '/app/pages/contact.html',
    })
        .when("/about", {
        templateUrl: '/app/pages/about.html',
    })
        .otherwise("/");
    $locationProvider.html5Mode(true);
}
