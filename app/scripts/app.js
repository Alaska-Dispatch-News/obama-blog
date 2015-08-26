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
    'infinite-scroll',
    'angular.filter'
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
  /* Article Factory: Pulls the API data from the JSON object and allows
  the page to scroll until it reaches the end of the file. Used to save bandwidth
  and to create an endless scroll effect. */
  var Article = function() {
    this.items = [];
    this.busy = false;
    this.after = 0;
  };

  /* Prototype sets up the next page function used for the infinite scrolling. */
  Article.prototype.nextPage = function() {
    if (this.busy) {
      return;
    }
    this.busy = true;
    console.log(this.after);
    /* Sets up the URL to the JSON. Replaces the offset with this.after */
    var url = "http://www.adn.com/appdata/views/ad_app_feed/?display_id=section_front&offset=" + this.after + "&limit=3&args[0]=1678831&args[1]=1678831";
    $http.get(url).success(function(data) {
      //console.log("Succesfully called API");
      //console.log(this.after);

      /* Assigns the succesful JSON call to the variable items. */
      var items = data;

      /* Loops through the items variable and pushes them to the this.items array. */
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i]);
      }

      /* Assigns this.after to the amount of items in the array plus three. The feed pulls in
      three articles at a time. The next time it's run it will offset it by three to prevent
      the same articles from being pulled again. */
      this.after = this.items.length;
      this.busy = false;
    }.bind(this));
  };

  return Article;
});
