//  define(function (require, exports, module) {
//    var ApplicationConstants = require('../Constants/Application.js')
//    var actions = require('../Actions/Specialities.js')
//    function SpecialityStore (state = [], action) {
//      switch (action.type) {
//        case ApplicationConstants.LoadSpecialities:
//          actions.GetSpecialities(function (data) {
//            action.dispatch({type: ApplicationConstants.SpecialitiesLoaded, Specialities: data.data})
//          })
//          return state
//        case ApplicationConstants.AddSpecialityAction:
//          actions.addSpeciality(action.speciality, function () {
//            action.dispatch({type: ApplicationConstants.LoadSpecialities, dispatch: action.dispatch})
//          })
//          return state
//        case ApplicationConstants.SpecialitiesLoaded:
//          return Object.assign([], state, action.Specialities)
//        case ApplicationConstants.SpecialityDeleted:
//          actions.DeleteSpeciality(action.SpecialityId)
//          state.splice(action.Index, 1)
//          return state
//        default:
//          return state
//      }
//    }

//    module.exports = SpecialityStore
//  })

    import ApplicationConstants from '../Constants/Application.js'
    import actions from '../Actions/Specialities.js'

    const SpecialityStore = (state = [], action) => {
      switch (action.type) {
        case ApplicationConstants.LoadSpecialities:
          actions.GetSpecialities(function (data) {
            action.dispatch({type: ApplicationConstants.SpecialitiesLoaded, Specialities: data.data})
          })
          return state
        case ApplicationConstants.AddSpecialityAction:
          actions.addSpeciality(action.speciality, function () {
            action.dispatch({type: ApplicationConstants.LoadSpecialities, dispatch: action.dispatch})
          })
          return state
        case ApplicationConstants.SpecialitiesLoaded:
          return Object.assign([], state, action.Specialities)
        case ApplicationConstants.SpecialityDeleted:
          actions.DeleteSpeciality(action.SpecialityId)
          state.splice(action.Index, 1)
          return state
        default:
          return state
      } }
    export default SpecialityStore
