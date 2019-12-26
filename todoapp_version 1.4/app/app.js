var main = angular.module("mainModule", ["ngRoute"]);
main.config(routeConfig);
routeConfig.$inject = ["$routeProvider", '$locationProvider'];
function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
        templateUrl: '/app/pages/home.html',
        controller: 'todoListController as vm'
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
