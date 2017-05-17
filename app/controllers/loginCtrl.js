app.controller('loginCtrl', function ($scope, apiFactory) {

  console.log(`firing the login controller`)

  $scope.loginUser = (email, pass) => {
    console.log("email and password:", email, pass)
    apiFactory.login(email, pass)
      .then((res) => {
        console.log("res:", res)
      })
  }

})
