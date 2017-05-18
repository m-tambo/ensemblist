app.controller('registerCtrl', function ($scope, apiFactory) {

  console.log(`firing the register controller`)

  $scope.user = {
    email: $scope.email,
    password: $scope.password,
    confirmation: $scope.confirmation
  }

  $scope.registerUser = () => {
    console.log("$scope.user:", $scope.user)
    apiFactory.register($scope.user)
      .then((res) => {
        console.log("res:", res)
      })
  }

})
