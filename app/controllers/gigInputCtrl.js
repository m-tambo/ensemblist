app.controller('gigInputCtrl', function ($scope, apiFactory, $location) {

  console.log(`firing the gig input controller`)


  // $scope.currentUser = {
  //   id: 1
  // }

  $scope.gig = {
    owner_id: 1,
    name: '',
    date: '',
    description: '',
    seatNum: ''
  };

  $scope.addGig = () => {
    apiFactory.createGig($scope.gig)
      .then((gig) => {
        console.log("the gig id returned from db:", gig.id)
        for (let i = 0; i < $scope.gig.seatNum; i++) {
          let newSeat = {
            user_id: null,
            gig_id: gig.id,
            instrument: null,
            status: null
          }
          apiFactory.createSeat(newSeat)
            .then(() => {
              if (i === $scope.gig.seatNum - 1) {
                $location.url(`/seatselect/${gig.id}`)
              }
            })
        }
        console.log(`${$scope.gig.seatNum} seats created`)
        console.log("gig id:", gig.id)
      })
      .catch(() => {
        alert('Please fill out all fields')
      })
  }

})
