'use strict';
angular.module('activitiModeler')
    .controller('HeaderController', ['$rootScope', '$scope', '$http', '$timeout', function ($rootScope, $scope, $http, $timeout) {

    	$scope.headerConfig = KISBPM.HEADER_CONFIG;
}]);