(function() {
  var AccueilController, baseApp;

  baseApp = angular.module('baseApp');

  AccueilController = function($scope) {
    return $scope.pop = function() {
      return alert('Pop');
    };
  };

  AccueilController.$inject = ['$scope'];

  baseApp.controller('AccueilController', AccueilController);

}).call(this);
