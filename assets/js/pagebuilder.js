/* global angular */

/**
 * The main PageBuilder app module
 *
 * @type {angular.Module}
 */

var pageBuilder = angular.module('pageBuilder', [ 'mgcrea.ngStrap.modal' ]);
//angular.module('pageBuilder', [ 'mgcrea.ngStrap.modal' ]);
pageBuilder.controller('pageController', function($scope, $modal) {
  // Show a basic modal from a controller
  var myModal = $modal({title: 'My Title', content: 'My Content', show: true});

  // Pre-fetch an external template populated with a custom scope
  var myOtherModal = $modal({scope: $scope, template: '/assets/partials/basic.html', show: false});
  // Show when some event occurs (use $promise property to ensure the template has been loaded)
  $scope.showModal = function() {
    myOtherModal.$promise.then(myOtherModal.show);
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