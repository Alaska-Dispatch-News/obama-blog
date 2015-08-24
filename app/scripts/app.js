'use strict';

/**
 * @ngdoc overview
 * @name obamaBlogApp
 * @description
 * # obamaBlogApp
 *
 * Main module of the application.
 */
angular
  .module('obamaBlogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
