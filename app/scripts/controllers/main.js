'use strict';

/**
 * @ngdoc function
 * @name obamaBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the obamaBlogApp
 */
angular.module('obamaBlogApp')
  .controller('MainCtrl', function ($scope, $http, $sce, Article) {

    /* Creates a re-usable function that can be used to bind HTML to the DOM from
      the JSON. */
    $scope.to_trusted = function(html_code) {
      return $sce.trustAsHtml(html_code)
    };

    /* Creates a new article object. Used alongside the Article factory. */
    $scope.article = new Article();
  });
