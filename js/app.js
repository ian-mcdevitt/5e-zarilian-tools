'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'av_adi.controllers.spells',
    'av_adi.directives',
    'av_adi.services',
    'av_adi.filters'
])
.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider.when('/spells/', {templateUrl: 'partials/spells.html', controller: 'spellsCtrl'});
    $routeProvider.when('/spells/:levels', {templateUrl: 'partials/spells.html', controller: 'spellsCtrl'});
    $routeProvider.when('/spells/:levels/:classes', {templateUrl: 'partials/spells.html', controller: 'spellsCtrl'});
    $routeProvider.when('/spells/:levels/:classes/:schools', {templateUrl: 'partials/spells.html', controller: 'spellsCtrl'});
    $routeProvider.when('/spells/:levels/:classes/:schools/:selected', {templateUrl: 'partials/spells.html', controller: 'spellsCtrl'});
    $httpProvider.defaults.useXDomain = true;
}]);
