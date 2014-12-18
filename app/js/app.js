'use strict';

// Declare app level module which depends on views, and components
var RssFeedApp = angular.module('RssFeedApp', [
  'ngRoute',
  'RssFeedControllers',
  'RssFeedServices',
  'RssFeedApp.version'
]);

RssFeedApp.config(['$routeProvider',
    function($routeProvider) {
  $routeProvider.
      when('/view', {
          templateUrl: 'view/view.html',
          controller: 'FeedCtrl'
      }).
      otherwise({
          redirectTo: '/view'
      });
}]);
