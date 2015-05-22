(function() {
  var app;

  app = angular.module('baseApp', ['ui.router', 'ui.router', 'ngAnimate', 'foundation']);

  app.controller('BaseController', function($scope) {
    return $scope.notification = 4;
  });

}).call(this);

(function() {
  var baseApp;

  baseApp = angular.module("baseApp");

  baseApp.config(function($urlRouterProvider, $locationProvider, $stateProvider) {
    $stateProvider.state('accueil', {
      url: '/',
      templateUrl: 'app/accueil/index.html',
      animation: {
        enter: 'fadein',
        leave: 'slideOutRight'
      }
    });
    $stateProvider.state('dossiers-stage', {
      url: '/dossiers-stage',
      templateUrl: 'app/dossiers-stage/index.html',
      controller: 'DossierController',
      animation: {
        enter: 'slideInRight',
        leave: 'slideOutRight'
      }
    });
    $urlRouterProvider.otherwise('/');
    return $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
  });

}).call(this);
