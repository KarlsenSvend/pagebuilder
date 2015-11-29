/* global angular */

/**
 * The main PageBuilder app module
 *
 * @type {angular.Module}
 */

var pageBuilder = angular.module('pageBuilder', []);

pageBuilder.service('$scope', function () {

});

// pageBuilder.controller('Customer', ['$scope',
//     function($scope) {
//         $scope.customer = {
//             name: 'John Botos',
//             address: '15873 N 18th St, Phoenix AZ 85022'
//         };
//     }
// ]);

// pageBuilder.directive('myCustomer', function() {
//     return {
//         //template: 'Name: {{customer.name}} <br> Address: {{customer.address}}'
//         templateUrl: '/assets/partials/customer.html'
//     };
// });
 
 


pageBuilder.controller('templateController', ['$scope',
    function($scope) {
        $scope.information = {
            name: 'John Botos',
            address: '15873 N 18th St, Phoenix AZ 85022'
        };
    }
]);

pageBuilder.directive("addTemplate", ['$scope', '$http', '$sce', function($scope, $http, $sce) {

	// $http.get('/assets/partials/text.html').then(function (data) {
	// 	$scope.templateData = data.data; 
	// });

	return function(scope, element, attrs){
		

		//console.log(attrs.attr);


		element.bind("click", function(){
			//$http.get('/assets/partials/mod_text.html').then(function (data) {
				//$scope.content = $sce.trustAsHtml(data.data);
				//$scope.content = data.data;
				
				angular.element(document.getElementById('template-container')).append($scope.templateData);


	   		//});
		});
	};

	// $http({
	// 	method: 'GET',
	// 	url: '/assets/partials/mod_text.html'
	// }).then(function successCallback(data) {
	// 	// this callback will be called asynchronously
	// 	// when the response is available
		
	// 	console.log(data);

	// 	return function(scope, element, attrs) {
	// 		element.bind("click", function() {
	// 			//angular.element(document.getElementById('template-container')).append($compile("Woop")(scope));
	// 			angular.element(document.getElementById('template-container')).append($compile("<div>" + data + "</div>")(scope));
	// 		});
	// 	};


	// }, function errorCallback(data) {
	// 	// called asynchronously if an error occurs
	// 	// or server returns response with an error status.
	// });

	}
]);



pageBuilder.directive("testTemplate", ['$http', function($http) {
	return function(scope, element, attrs){ 
		element.bind("click", function(){
			$http.get('/assets/partials/' + attrs.templateType + '.html').then(function (data) {
				angular.element(document.getElementById('template-container')).append(data.data);
			}); 	
		 });
	}
}]);


// pageBuilder.controller('templatesController', ['$scope', '$document', function($scope, $document) {
// 	//console.log($document);
// 	// $scope.templateModules = {

// 	// }
// }]);
