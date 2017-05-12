app.controller('landingCtrl', function ($scope, $location) {

  console.log(`firing the landing controller`)

  $scope.goToGigInput = () => {
    $location.url('/newgig')
  }

})
