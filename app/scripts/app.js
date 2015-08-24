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
    'ngTouch',
    'infinite-scroll'
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
  }).factory('Article', function($http) {
  var Article = function() {
    this.items = [];
    this.busy = false;
    this.after = '';
  };

  Article.prototype.nextPage = function() {
    if (this.busy) return;
    this.busy = true;

    var url = "http://www.adn.com/appdata/views/ad_app_feed/?display_id=arctic_section_front&offset=" + this.after + "&limit=3&args[0]=18&args[1]=18.json"
    $http.get(url).success(function(data) {
      //console.log("Succesfully called API");
      var items = data;
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i]);
      }
      this.after = this.items.length + 3;
      this.busy = false;
    }.bind(this));
  };

  return Article;
});
