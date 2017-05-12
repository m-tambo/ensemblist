app.controller('seatSelectCtrl', function ($scope, seats, instruments) {

  console.log(`firing the seat select controller`)

  $scope.seats = seats
  $scope.instruments = instruments

  console.log("instruments:", instruments)
})
