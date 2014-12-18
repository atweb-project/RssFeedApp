'use strict';

/* Controllers */

var RssFeedControllers = angular.module('RssFeedControllers', []);

RssFeedControllers.controller('FeedCtrl', ['$scope', 'FeedService',
  function($scope, Feed) {

    $scope.loadFeed = function() {
        Feed.parseFeed($scope.feedSrc).
            then(function(res){
                $scope.feeds = res.data.responseData.feed.entries;
            });
    };

      $scope.addUrls = function() {
          $scope.urls.push({
              url: $scope.feedSrc
          });

          $scope.feedSrc = '';
          localStorage.setItem('urllist', JSON.stringify($scope.urls));
          $scope.urlList();
      };

      $scope.urlList = function() {

          if(typeof $scope.urls ==='undefined')
          {
              if(localStorage.getItem("urllist") ===null)
              {
                  $scope.urls = [];
              }
              else
              {
                  $scope.urls = JSON.parse(localStorage.getItem("urllist"));
              }
          }
          else
          {
              console.log('length'+$scope.urls.length);
          }

      }

      $scope.urlList();

  }]);


