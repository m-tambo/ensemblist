app.controller('seatSelectCtrl', function ($scope, seats, instruments, apiFactory, $stateParams, $location) {
    // current gig_id is saved as $stateParams.id

    // declare the resolve objects on scope
  $scope.seats = seats
  $scope.instruments = instruments

    // each time the option is changed, update the corresponding seat with the new instrument
  $scope.saveInstrument = (inst, seatId) => {
    console.log('instrument:', inst, seatId)
    let updatedSeat = {
      id: seatId,
      user_id: null,
      gig_id: $stateParams.id,
      instrument: inst,
      status: null
    }
    apiFactory.updateSeat(seatId, updatedSeat)
  }

  $scope.goToGigView = () => {
    $location.url(`/gig/${$stateParams.id}`)
  }

})
