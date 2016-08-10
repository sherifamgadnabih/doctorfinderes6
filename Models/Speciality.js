var mongoose = require('mongoose')

var SpecialitySchema = mongoose.Schema({
  name: String

})

module.exports = mongoose.model('Speciality', SpecialitySchema)
