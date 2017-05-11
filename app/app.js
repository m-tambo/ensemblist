const app = angular.module('ensemblist', ['ui.router', 'ui.bootstrap', 'navbar'])

app
  .config(($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: '/app/partials/landing.html',
        controller: 'landingCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: '/app/partials/login.html',
        controller: 'loginCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: '/app/partials/register.html',
        controller: 'registerCtrl'
      })
      .state('home', {
        url: '/home',
        resolve: {
        },
        controller: 'homeCtrl',
        templateUrl: '/app/partials/home.html'
      })
      .state('gigInput', {
        url: '/newgig',
        templateUrl: '/app/partials/gigInput.html',
        controller: 'gigInputCtrl'
      })
      .state('message', {
        url: '/message',
        templateUrl: '/app/partials/message.html',
        controller: 'messageCtrl'
      })
      .state('gigView', {
        url: '/gig/:id',
        resolve: {
          gig: ['apiFactory', '$stateParams', function (apiFactory, $stateParams) {
            return apiFactory.getGigById($stateParams.id)
          }]
        },
        templateUrl: '/app/partials/gigView.html',
        controller: 'gigViewCtrl'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: '/app/partials/profile.html',
        controller: 'profileCtrl'
      })

  }) // end of config
