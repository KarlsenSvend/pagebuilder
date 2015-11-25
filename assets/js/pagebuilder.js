/* global angular */

/**
 * The main PageBuilder app module
 *
 * @type {angular.Module}
 */

 //https://github.com/a5hik/ng-sortable/tree/master/dist


var pageBuilder = angular.module('pageBuilder', ['mgcrea.ngStrap', 'mgcrea.ngStrap.modal', 'as.sortable', 'contenteditable']);
//angular.module('pageBuilder', [ 'mgcrea.ngStrap.modal' ]);
pageBuilder.controller('pageController', function($scope, $modal) {

	//$scope.model = "Initial stuff <b>with bold</b> <em>and italic</em> yay";


	$scope.templates = [
		{ name: 'Text', url: '/assets/partials/mod_text.html'},
		{ name: 'Text and Image', url: '/assets/partials/mod_text_image.html'},
      ];
      $scope.template = $scope.templates[0];

	$scope.items = [{
		name: 'gsdfgsd'
	}, {
		name: 'item 2'
	}, {
		name: 'item 3'
	}, {
		name: 'item 4'
	}, {
		name: 'item 5'
	}, {
		name: 'item 6'
	}, {
		name: 'item 7'
	}, {
		name: 'item 8'
	}];

	$scope.sortableOptions = {
		containment: '#sortable-container'
	};


	$scope.modal = {title: 'Title', content: 'Hello Modal<br />This is a multiline message!'};

	// Controller usage example
	//
	function MyModalController($scope) {
		$scope.title = 'Some Title';
		$scope.content = 'Hello Modal<br />This is a multiline message from a controller!';
	}
	MyModalController.$inject = ['$scope'];
	var myModal = $modal({controller: MyModalController, templateUrl: 'modal/docs/modal.demo.tpl.html', show: false});
	$scope.showModal = function() {
		myModal.$promise.then(myModal.show);
	};
	$scope.hideModal = function() {
		myModal.$promise.then(myModal.hide);
	};
 
});

// angular.module('pagebuilder', ['ngRoute', 'ngResource'])
// .config(function($routeProvider) {
//     'use strict';

//     var routeConfig = {
//         controller: 'TodoCtrl',
//         templateUrl: 'todomvc-index.html',
//         resolve: {
//             store: function(todoStorage) {
//                 // Get the correct module (API or localStorage).
//                 return todoStorage.then(function(module) {
//                     module.get(); // Fetch the todo records in the background.
//                     return module;
//                 });
//             }
//         }
//     };

//     $routeProvider
//         .when('/', routeConfig)
//         .when('/:status', routeConfig)
//         .otherwise({
//             redirectTo: '/'
//         });
// });