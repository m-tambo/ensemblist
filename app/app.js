const app = angular.module('ensemblist', ['ui.router', 'ui.bootstrap'])

app
  .config(($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/app/partials/home.html'
      })


  })
