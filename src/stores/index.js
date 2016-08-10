// define(function (require, exports, module) {
//   var Redux = require('redux')
//   var Doctors = require('../Stores/Doctors.js')
//   var Specialites = require('../Stores/Speciality.js')

//   module.exports.default = Redux.combineReducers({
//     Doctors,
//     Specialites
//   })
// })

import {combineReducers} from 'redux'
import Doctors from '../Stores/Doctors.js'
import Specialites from '../Stores/Speciality.js'

export default combineReducers({Doctors, Specialites})
