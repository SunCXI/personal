/**
 * Created by sunchenxi on 2016/10/30.
 */
var myApp = angular.module('myApp',['routeModule']);
myApp.controller('myCtrl',['$scope','$routeParams','$rootScope','$location',function ($scope,$routeParams,$rootScope,$location) {
    // console.log($routeParams);
    // console.log($location.$$path);
    $rootScope.url = $location.$$path;
    console.log($rootScope.url);

}]);