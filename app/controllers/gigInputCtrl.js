app.controller('gigInputCtrl', function ($scope, apiFactory, $location) {

  console.log(`firing the gig input controller`)

  $scope.gig = {
    name: '',
    date: '',
    description: '',
    seatNum: ''
  };

  $scope.addGig = () => {
    apiFactory.createGig($scope.gig)
      .then((gig) => {
        for (let i = 0; i < $scope.gig.seatNum; i++) {
          let newSeat = {
            user_id: null,
            gig_id: gig.id,
            instrument: null,
            status: null
          }
          apiFactory.createSeat(newSeat)
        }
        console.log(`${gig.seatNum} seats created`)
        console.log("gig.id:", gig.id)
        $location.url(`/seatselect/${gig.id}`)
      })
      .catch(() => {
        alert('Please fill out all fields')
      })
  }

})
