app.controller('gigViewCtrl', function ($scope, $stateParams, gig, seats, apiFactory, $state, $location, $anchorScroll) {

  $scope.gig = gig
  $scope.seats = seats
  console.log(`firing the gig view controller for gig # ${$stateParams.id}`, gig, seats)

  $scope.searching = false

  $scope.startSearching = function(e) { // open search div, targeting the selected seat on scope
    $scope.targetSeat = e
    $scope.searching = true // the search-box is set to ng-show="searching"
    $location.hash('search-box') // set the location.hash to scroll down to the div of id="search-box"
    $anchorScroll()
  }

  $scope.zipCodeSearch = (zip, radius) => { // get an array of zips in specified radius
    console.log(`searching for zip codes`, zip, radius)
    apiFactory.getZipCodes(zip, radius)
      .then((array) => {
        console.log("zipcode results:", array)
        $scope.filterUsersByZip(array)
      })
    }

  $scope.filterUsersByZip = (array) => { // get all users of this instument and filter the ones in th zip radius
    apiFactory.getUsersByInst($scope.targetSeat.instrument)
      .then((users) => {
        console.log("users:", users)
        let newArray = users.filter(x => array.includes(Number(x.zip)) ? x : false)
        console.log("newArray:", newArray)
        if (newArray.length === 0) {
          alert('No collaborators found. Please widen your radius')
        } else {
          return newArray
        }
      })
      .then((results) => {
        $scope.results = results   // define the search results on scope
        console.log("$scope.results:", $scope.results, results)
      })
  }

  $scope.inviteToGig = (user) => {
    console.log("user:", user)
    let updatedSeat = {
      id: $scope.targetSeat.id,
      user_id: user.id,
      gig_id: $scope.gig.id,
      instrument: $scope.targetSeat.instrument,
      status: "pending"
    }
    apiFactory.updateSeat($scope.targetSeat.id, updatedSeat)
      .then(() => {
        // alert(`invite sent`)
        $location.hash(``)
        $state.reload()
      })
      .catch((err) => console.log("error:", err))
  }


  $scope.showMore = (result) => {
    $scope.moreInfoUser = result
    $scope.initMap()
  }

  $scope.initMap = () => {
    console.log("zip injected into api call:", $scope.moreInfoUser.zip)
    apiFactory.getLatLong($scope.moreInfoUser.zip)
      .then((data) => {
        console.log("data:", data)
        let userZip = {lat: data.lat, lng: data.lng}
        console.log("userZip:", userZip)
        let nash = {lat: 36.1627, lng: -86.7816};
        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: userZip
        })
        let marker = new google.maps.Marker({
          position: userZip,
          map: map
        })
      })
  }


    //_______UI BOOTSTRAP TOOLTIP/MODAL ATTEMPT________
  // $(document).ready( () => {

  //   // $('[data-toggle=tooltip]').hover( () => {
  //   //     // on mouseenter
  //   //     $(this).tooltip('show');
  //   // }, function(){
  //   //     // on mouseleave
  //   //     $(this).tooltip('hide');
  //   // })

  //   // _______TOOLTIP_______
  //   $scope.dynamicTooltip = 'Hello, World!';
  //   $scope.dynamicTooltipText = 'dynamic';
  //   $scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
  //   $scope.placement = {
  //     options: [
  //       'top',
  //       'top-left',
  //       'top-right',
  //       'bottom',
  //       'bottom-left',
  //       'bottom-right',
  //       'left',
  //       'left-top',
  //       'left-bottom',
  //       'right',
  //       'right-top',
  //       'right-bottom'
  //     ],
  //     selected: 'top'
  //   };  // _______END OF TOOLTIP______

  //   // _______MODAL_______
  //   var $ctrl = this;
  //   $ctrl.items = ['item1', 'item2', 'item3'];

  //   $ctrl.animationsEnabled = true;

  //   $ctrl.open = function (size, parentSelector) {
  //     var parentElem = parentSelector ?
  //       angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
  //     var modalInstance = $uibModal.open({
  //       animation: $ctrl.animationsEnabled,
  //       ariaLabelledBy: 'modal-title',
  //       ariaDescribedBy: 'modal-body',
  //       templateUrl: 'myModalContent.html',
  //       controller: 'ModalInstanceCtrl',
  //       controllerAs: '$ctrl',
  //       size: size,
  //       appendTo: parentElem,
  //       resolve: {
  //         items: function () {
  //           return $ctrl.items;
  //         }
  //       }
  //     });

  //     modalInstance.result.then(function (selectedItem) {
  //       $ctrl.selected = selectedItem;
  //     }, function () {
  //       $log.info('Modal dismissed at: ' + new Date());
  //     });
  //   };

  //   $ctrl.openComponentModal = function () {
  //     var modalInstance = $uibModal.open({
  //       animation: $ctrl.animationsEnabled,
  //       component: 'modalComponent',
  //       resolve: {
  //         items: function () {
  //           return $ctrl.items;
  //         }
  //       }
  //     });

  //     modalInstance.result.then(function (selectedItem) {
  //       $ctrl.selected = selectedItem;
  //     }, function () {
  //       $log.info('modal-component dismissed at: ' + new Date());
  //     });
  //   };

  //   $ctrl.openMultipleModals = function () {
  //     $uibModal.open({
  //       animation: $ctrl.animationsEnabled,
  //       ariaLabelledBy: 'modal-title-bottom',
  //       ariaDescribedBy: 'modal-body-bottom',
  //       templateUrl: 'stackedModal.html',
  //       size: 'sm',
  //       controller: function($scope) {
  //         $scope.name = 'bottom';
  //       }
  //     });

  //     $uibModal.open({
  //       animation: $ctrl.animationsEnabled,
  //       ariaLabelledBy: 'modal-title-top',
  //       ariaDescribedBy: 'modal-body-top',
  //       templateUrl: 'stackedModal.html',
  //       size: 'sm',
  //       controller: function($scope) {
  //         $scope.name = 'top';
  //       }
  //     });
  //   };

  //   $ctrl.toggleAnimation = function () {
  //     $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  //   } // _______END OF MODAL_______

  // }) // END OF DOCUMENT.READY

})
