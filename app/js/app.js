'use strict';


// Declare app level module which depends on filters, and services
angular.module('illegalcharacters.io', []).
  value('version', '0.1').

  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/a', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]).

  factory('backend', function () {
    return { data: 'abcé´ääêëüë132€15', options: {} };
  }).

  controller('MyCtrl1', ['$scope', 'backend', function($scope, backend) {
    $scope.backend = backend;
  }])
  .controller('MyCtrl2', ['$scope', 'backend', function($scope, backend) {
    $scope.txt = '';
    for ( var i = 0 ; i < backend.data.length ; i++ ) {
      if ( backend.data.charCodeAt(i) >= 128 )
        $scope.txt  += '<b>' + backend.data[i] + '</b>';
      else
        $scope.txt  += backend.data[i];
    }
  }]);
