app.controller('mapCtrl', function ($scope) {
  console.log(`firing the initmap function`)

  $scope.initMap = () => {

    var uzerZip
    var nash = {lat: 36.1627, lng: -86.7816};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: nash
    })
    var marker = new google.maps.Marker({
      position: userZip,
      map: map
    })

  }

})
