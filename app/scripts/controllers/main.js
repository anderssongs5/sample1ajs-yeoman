'use strict';

/**
 * @ngdoc function
 * @name sample1AjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sample1AjsApp
 */
angular.module('sample1AjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    $scope.addTodo = function () {
		$scope.todos.push($scope.t);
		$scope.t = '';
	};
	$scope.removeTodo = function (index) {
	  $scope.todos.splice(index, 1);
	};
  });
