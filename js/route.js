/**
 * Created by sunchenxi on 2016/10/29.
 */
var routeModule = angular.module('routeModule',['ngRoute']);
routeModule.config(["$routeProvider",function ($routeProvider) {
    $routeProvider.when('/about',{
        templateUrl:'./personal.html',
        controller:'myCtrl'
            })
        .when('/main',{
            templateUrl:'./main.html',
            controller:'myCtrl'
        })
        .when('/hobby',{
            templateUrl:'./hobby.html',
            controller:'myCtrl'
        })
        .otherwise({
        redirectTo:'/main'
    })
}])