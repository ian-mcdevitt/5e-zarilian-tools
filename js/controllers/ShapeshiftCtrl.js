'use strict';

/* Controllers */

angular.module('dnd5e.controllers.shapeshift', []).controller('shapeshiftCtrl', ['$scope', '$sce', '$routeParams', 'beasts', function($scope, $sce, $routeParams, beasts) {
	$scope.beasts = beasts;
	$scope.min_cr = 0;
	$scope.max_cr = 30;
	$scope.swim = 'false';
	$scope.flight = 'false';
	$scope.size = 1;

	$scope.filterBeasts = function(beast) {
		console.log(beast, $scope);
		if(
			   beast.cr < $scope.min_cr
			|| beast.cr > $scope.max_cr
			|| beast.swim == true && $scope.swim == 'false'
			|| beast.flight == true && $scope.flight == 'false'
			|| beast.size != +$scope.size
		) { console.log(beast.cr, $scope.min_cr, $scope.max_cr, beast.swim, $scope.swim, beast.flight, $scope.flight, beast.size, $scope.size); return false; }
		return true;
	}	
}]);
