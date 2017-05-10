app.controller('gigViewCtrl', function ($scope, $stateParams, gig) {

  $scope.gig = gig

  console.log(`firing the gig view controller for gig # ${$stateParams.id}`)


})
