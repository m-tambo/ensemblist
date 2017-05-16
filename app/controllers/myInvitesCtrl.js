app.controller('myInvitesCtrl', function ($scope, seats, apiFactory, $state) {

  console.log(`firing the myInvites controller`)

  $scope.seats = seats
  console.log("seats:", seats)

  $scope.acceptInvite = (seat) => {
    console.log("seat:", seat)
    let updatedSeat = {
      id: seat.id,
      user_id: seat.user_id,
      gig_id: seat.gig_id,
      instrument: seat.instrument,
      status: "accepted"
    }
    apiFactory.updateSeat(seat.id, updatedSeat)
      .then(() => {
        $state.reload()
      })
      .catch((err) => console.log("error:", err))
  }

})
