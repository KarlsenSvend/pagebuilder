/* global angular */

/**
 * The main PageBuilder app module
 *
 * @type {angular.Module}
 */

var pageBuilder = angular.module('pageBuilder', ['mgcrea.ngStrap', 'mgcrea.ngStrap.modal', 'as.sortable', 'contenteditable']);
 
pageBuilder.service('$scope', function () {

});

pageBuilder.controller('templateController', function($scope, $modal) {

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

	
      $scope.information = {
          name: 'John Botos',
          address: '15873 N 18th St, Phoenix AZ 85022'
      };
    

	// $scope.modal = {title: 'Title', content: 'Hello Modal<br />This is a multiline message!'};

	// Controller usage example
	//
	function MyModalController($scope) {
		$scope.title = 'Page Templates';
		//$scope.content = 'Hello Modal<br />This is a multiline message from a controller!';
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

pageBuilder.directive("testTemplate", ['$http', function($http) {
	return function(scope, element, attrs){ 
		element.bind("click", function(){
			$http.get('/assets/partials/' + attrs.templateType + '.html').then(function (data) {
				angular.element(document.getElementById('template-container')).append(data.data);
			}); 	
		 });
	}
}]);
 