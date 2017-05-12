app.factory('apiFactory', function($http) {

  const srvr = 'http://localhost:3030/api/v1'

  return {
    getInstruments() {
      return $http.get('/public/instruments.json')
        .then((data) => {
          return data.data
        })
    },
//_____ GIG ENDPOINTS _____
    getGigById(gigId) { // get one gig by id
      return $http.get(`${srvr}/gig/${gigId}`)
        .then((data) => {
          return data.data
        })
    },
    getGigByOwner(ownerId) { // get one gig by owner id
      return $http.get(`${srvr}/gigs/${ownerId}`)
        .then((data) => {
          return data.data
        })
    },
    createGig(newGig) {
      return $http.post(`${srvr}/gig/new`, newGig)
        .then((data) => {
          return data.data
        })
    },
    updateGig(gigId, updatedGig) {
      return $http.patch(`${srvr}/gig/edit/${gigId}`, updatedGig)
        .then((data) => {
          return data.data
        })
    },
    deleteGig(gigId) {
      return $http.delete(`${srvr}/gig/delete/${gigId}`)
        .then((data) => {
          return data.data
        })
    },
//_____ SEAT ENDPOINTS _____
    getSeat(seatId) { // get one seat by seat id
      return $http.get(`${srvr}/seat/${seatId}`)
        .then((data) => {
          return data.data
        })
    },
    getSeatsByGig(gigId) { // get all seats by gig id
      return $http.get(`${srvr}/seats/${gigId}`)
        .then((data) => {
          return data.data
        })
    },
    createSeat(newSeat) {
      return $http.post(`${srvr}/seat/new`, newSeat)
        .then((data) => {
          return data.data
        })
    },
    updateSeat(seatId, updatedSeat) {
      return $http.patch(`${srvr}/seat/edit/${seatId}`, updatedSeat)
        .then((data) => {
          return data.data
        })
    },
    deleteSeat(seatId) {
      return $http.delete(`${srvr}/seat/delete/${seatId}`)
        .then((data) => {
          return data.data
        })
    },
//_____ USER ENDPOINTS _____
    getUserById(userId) { // get one user by id
      return $http.get(`${srvr}/user/${userId}`)
        .then((data) => {
          return data.data
        })
    },
    getUsersByInst(instrument) { // get all users by instrument
      return $http.get(`${srvr}/users/all/${instrument}`)
        .then((data) => {
          return data.data
        })
    },
    getUsersByGig(gigId) { // get all users by gig
      return $http.get(`${srvr}/users/all/${gigId}`)
        .then((data) => {
          return data.data
        })
    },
    createUser() {
      return $http.post(`${srvr}/user/new`)
        .then((data) => {
          return data.data
        })
    },
    updateUser(userId, updatedUser) {
      return $http.patch(`${srvr}/user/edit/${userId}`, updatedUser)
        .then((data) => {
          return data.data
        })
    },
    deleteUser(userId) {
      return $http.delete(`${srvr}/user/delete/${userId}`)
        .then((data) => {
          return data.data
        })
    }

  }
})
