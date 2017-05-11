const nav = angular.module('navbar', [])

nav
  .directive('navbar', () => {
    return {
      restrict: "E",  // defines this directive as the element <navbar>
      templateUrl: "/app/partials/navbar.html",
      controller: ($scope, authFactory, $location) => {
      }
    }
  })
