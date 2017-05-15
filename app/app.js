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
            console.log("$stateParams.id:", $stateParams.id)
            return apiFactory.getSeatsByGig($stateParams.id)
          }],
          instruments: ['apiFactory', (apiFactory) => {
            return apiFactory.getInstruments()
          }]
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
      .state('myGigs', {
        url: '/mygigs',
        controller: 'myGigsCtrl',
        templateUrl: '/app/partials/myGigs.html',
        resolve: {
          gigs: ['apiFactory', '$stateParams', (apiFactory, $stateParams) => {
            return apiFactory.getGigsByOwner(1) // TODO change this to the id of the current user
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
