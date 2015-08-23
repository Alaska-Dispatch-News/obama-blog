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

    $scope.to_trusted = function(html_code) {
      return $sce.trustAsHtml(html_code)
    };
    // Pulls in the json object found in the data directory.
      $http.get('http://www.adn.com/appdata/views/ad_app_feed/?display_id=arctic_section_front&offset=0&limit=14&args[0]=18&args[1]=18.json')
        .success(function(data, status, headers, config) {
        $scope.articles = data;

      })
        .error(function(data, status, headers, config) {
        console.log("Error Receiving Data");
      });
  });
