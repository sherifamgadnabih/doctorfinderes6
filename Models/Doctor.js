var mongoose = require('mongoose')

var DoctorSchema = mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  Speciality: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Speciality'
  }

})

module.exports = mongoose.model('Doctor', DoctorSchema)
