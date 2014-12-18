'use strict';

angular.module('RssFeedApp.version', [
  'RssFeedApp.version.interpolate-filter',
  'RssFeedApp.version.version-directive'
])

.value('version', '0.1');
