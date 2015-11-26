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

	$scope.count = 0;
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
	
	// using service
	var myModal = $modal({controller: MyModalController, templateUrl: '/assets/partials/modal.html', show: false});
	
	$scope.showModal = function() {
		myModal.$promise.then(myModal.show);
	};
	$scope.hideModal = function() {
		myModal.$promise.then(myModal.hide);
	};

 
});



pageBuilder.directive("addbuttonsbutton", function(){
	return {
		restrict: "E",
		template: "<button addbuttons>Click to add buttons</button>"
	}
});


//Directive for adding buttons on click that show an alert on click
pageBuilder.directive("addbuttons", function($compile){
	return function(scope, element, attrs){
		element.bind("click", function(){
			scope.count++;
			angular.element(document.getElementById('space-for-buttons')).append($compile("<div><button class='btn btn-default' data-alert="+scope.count+">Show alert #"+scope.count+"</button></div>")(scope));
		});
	};
});



pageBuilder.controller('Templates', ['$scope', '$document', function($scope, $document) {
	//console.log($document);
	// $scope.templateModules = {

	// }
}]);

pageBuilder.directive("addTemplate", function($compile) {

	var templateUrl: '/assets/partials/mod_text.html';
	//console.log('im here');

	return function(scope, element, attrs) {
		element.bind("click", function() {
			//angular.element(document.getElementById('template-container')).append($compile("Woop")(scope));
			angular.element(document.getElementById('template-container')).append($compile("<div>"+ templateUrl +"</div>")(scope));
		});
	};
});



pageBuilder.controller('Customer', ['$scope', function($scope) {
  $scope.customer = {
    name: 'John Botos',
    address: '15873 N 18th St, Phoenix AZ 85022'
  };
}]);

pageBuilder.directive('myCustomer', function() {
  return {
    //template: 'Name: {{customer.name}} <br> Address: {{customer.address}}'
    templateUrl: '/assets/partials/customer.html'
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