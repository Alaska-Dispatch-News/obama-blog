'use strict';

/**
 * @ngdoc function
 * @name obamaBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the obamaBlogApp
 */
angular.module('obamaBlogApp')
  .controller('MainCtrl', function ($scope, $http, $sce) {

    /* Creates a re-usable function that can be used to bind HTML to the DOM from
      the JSON. */
    $scope.to_trusted = function(html_code) {
      return $sce.trustAsHtml(html_code)
    };
    /* Pulls in JSON and binds it to $scope.articles. */
    $http.get('http://www.adn.com/appdata/views/ad_app_feed/?display_id=arctic_section_front&offset=0&limit=14&args[0]=18&args[1]=18.json')
      .success(function(data) {
      $scope.articles = data;

    })
    /* If no content is retrieved it will display a console error. */
      .error(function(data) {
      console.log("Error Receiving Data");
    });
  });
