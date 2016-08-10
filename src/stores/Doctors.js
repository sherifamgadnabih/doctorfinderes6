// define(function (require, exports, module) {
//   var ApplicationConstants = require('../Constants/Application.js')
//   var actions = require('../Actions/Doctors.js')

//   function doctorStore (state = [], action) {
//     switch (action.type) {
//       case ApplicationConstants.LoadDoctors:
//         actions.GetDoctors(function (data) {
//           action.dispatch({ type: ApplicationConstants.DoctorsLoaded, Doctors: data.data })
//         })
//         return state

//       case ApplicationConstants.AddDoctorAction:

//         actions.addDoctor(action.Doctor, null)
//         return state

//       case ApplicationConstants.DoctorsLoaded:
//         return Object.assign([], state,
//           action.Doctors)
//       case ApplicationConstants.DoctorDeleted:
//         actions.DeleteDoctor(action.doctorID)
//         state.splice(action.Index, 1)
//         return state
//       default:
//         return state
//     }
//   }

//   module.exports = doctorStore
// })

  import ApplicationConstants from '../Constants/Application.js'
  import actions from '../Actions/Doctors.js'
  const doctorStore = (state = [], action) => {
    switch (action.type) {
      case ApplicationConstants.LoadDoctors:
        actions.GetDoctors(function (data) {
          action.dispatch({ type: ApplicationConstants.DoctorsLoaded, Doctors: data.data })
        })
        return state

      case ApplicationConstants.AddDoctorAction:

        actions.addDoctor(action.Doctor, null)
        return state

      case ApplicationConstants.DoctorsLoaded:
        return Object.assign([], state,
          action.Doctors)
      case ApplicationConstants.DoctorDeleted:
        actions.DeleteDoctor(action.doctorID)
        state.splice(action.Index, 1)
        return state
      default:
        return state
    }
  }
  export default doctorStore
