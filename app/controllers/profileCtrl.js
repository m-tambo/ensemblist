app.controller('profileCtrl', function ($scope, user) {

  console.log(`firing the profile controller`)
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }
  $scope.user = user
  $scope.first = user.first.capitalize()
  $scope.last = user.last.capitalize()


})
