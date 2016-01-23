'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', ['app.core','ui.router','blocks.toast','ngAnimate']);


app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'src/view1/view1.html',
            controller: 'View1Ctrl',
        })
        
        .state('about', {
            url: '/about',
            templateUrl: 'src/view2/view2.html',
            controller: 'View2Ctrl',
        });
        
});