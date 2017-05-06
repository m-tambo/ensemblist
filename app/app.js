const app = angular.module('ensemblist', ['ngRoute'])

app
  .config(($routeProvider) => {

    $routeProvider
      .when('/main', {
        controller: "mainCtrl",
        templateUrl: "/app/partials/main.html"
      })
      .otherwise({
        redirectTo: "/main"
      })

  })
