app.controller('gigViewCtrl', function ($scope, $stateParams, gig, seats) {

  $scope.gig = gig
  $scope.seats = seats
  console.log(`firing the gig view controller for gig # ${$stateParams.id}`, gig, seats)


})
