define(function (require, exports, module) {
 var $ = require('jquery')
  var actions = {

    GetDoctors: function (callback) {
      $.ajax('http://localhost:8080/Doctors/', {
        type: 'GET',
        dataType: 'json',
        success: function (data) {
          if (typeof callback === 'function') {
            callback(data)
          }
        }
      })
    },
    addDoctor: function (doctor, callback) {
      console.log(doctor)
      $.ajax('http://localhost:8080/AddDoctor/', {
        type: 'POST',
        data: doctor,
        success: function (data) {
          if (typeof callback === 'function') {
            callback()
          }
        }
      })
    },
    DeleteDoctor: function (doctorID, callback) {
      $.ajax('http://localhost:8080/DeleteDoctor/' + doctorID, {
        type: 'DELETE',
        data: doctorID,
        success: function (data) {
          if (typeof callback === 'function') {
            callback()
          }
        }
      })
    }

  }
  module.exports = actions
})
