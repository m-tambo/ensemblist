app.controller('mapCtrl', function ($scope) {
  console.log(`firing the initmap function`)

  $scope.initMap = () => {
    var nash = {lat: 36.1627, lng: -86.7816};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: nash
    });
    var marker = new google.maps.Marker({
      position: nash,
      map: map
    });
    var marker = new google.maps.Marker({
      position: {lat: -25.363, lng: 130.044},
      map: map
    });
    var marker = new google.maps.Marker({
      position: {lat: -24.363, lng: 130.044},
      map: map
    });

  }

})
