define(function (require, exports, module) {
  var $ = require('jquery')
  var actions = {

    GetSpecialities: function (callback) {
      $.ajax('http://localhost:8080/Specialities/', {
        type: 'GET',
        dataType: 'json',
        success: function (data) {
          if (typeof callback === 'function') {
            callback(data)
          }
        }
      })
    },
    addSpeciality: function (speciality, callback) {
      $.ajax('http://localhost:8080/AddSpeciality/', {
        type: 'POST',
        data: speciality,
        success: function (data) {
          if (typeof callback === 'function') {
            callback()
          }
        }
      })
    },
    DeleteSpeciality: function (specialityId, callback) {
      $.ajax('http://localhost:8080/DeleteSpeciality/' + specialityId, {
        type: 'Delete',
        data: specialityId,
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
