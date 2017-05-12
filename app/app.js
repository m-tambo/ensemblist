const app = angular.module('ensemblist', ['ui.router', 'ui.bootstrap', 'navbar'])

app
  .config(($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/');

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
        controller: 'homeCtrl',
        templateUrl: '/app/partials/home.html',
        resolve: {
        }
      })
      .state('gigInput', {
        url: '/newgig',
        templateUrl: '/app/partials/gigInput.html',
        controller: 'gigInputCtrl'
      })
      .state('seatSelect', {
        url: '/seatselect/:id',
        templateUrl: '/app/partials/seatSelect.html',
        controller: 'seatSelectCtrl',
         resolve: {
          seats: ['apiFactory', '$stateParams', (apiFactory, $stateParams) => {
            return apiFactory.getSeatsByGig($stateParams.id)
          }],
          instruments: ['apiFactory', (apiFactory) => {
            return apiFactory.getInstruments()
          }],

        }
      })
      .state('message', {
        url: '/message',
        templateUrl: '/app/partials/message.html',
        controller: 'messageCtrl'
      })
      .state('gigView', {
        url: '/gig/:id',
        templateUrl: '/app/partials/gigView.html',
        controller: 'gigViewCtrl',
        resolve: {
          gig: ['apiFactory', '$stateParams', (apiFactory, $stateParams) => {
            return apiFactory.getGigById($stateParams.id)
          }],
          seats: ['apiFactory', '$stateParams', (apiFactory, $stateParams) => {
            return apiFactory.getSeatsByGig($stateParams.id)
          }]
        }
      })
      .state('profile', {
        url: '/profile/:id',
        templateUrl: '/app/partials/profile.html',
        controller: 'profileCtrl',
        resolve: {
          user: ['apiFactory', '$stateParams', (apiFactory, $stateParams) => {
            return apiFactory.getUserById($stateParams.id)
          }]
        }
      })

  }) // end of config
