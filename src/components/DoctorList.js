// define(function (require, exports, module) {
//   var React = require('react')
//   var ReactDom = require('reactDom')
//   var store = require('../Stores/Doctors.js')
//   var DoctorRow = require('../Components/DoctorRow.js')
//   var actions = require('../Actions.js')
//   var ReactRedux = require('reactRedux')
//   var ApplicationConstants = require('../Constants/Application.js')
//   var DoctorList = React.createClass({

//     componentDidMount: function () {
//       this.props.dispatch({type: ApplicationConstants.LoadDoctors, dispatch: this.props.dispatch})
//     },
//     render () {
//       var Doctors = []

//       this.props.Doctors.forEach(function (doctor, index) {
//         Doctors.push(<DoctorRow Doctor={doctor} Index={index} ></DoctorRow>)
//       }, this)
//       return (
//         <div className='table-responsive'> <table className='table table-striped'>
//           <thead>
//             <tr>
//               <th> Name </th>
//               <th> Phone </th>
//               <th> Address </th>
//               <th> Speciality </th>
//               <th> </th>

//             </tr>
//           </thead>
//           <tbody>
//             {Doctors}
//           </tbody>
//         </table> </div>)
//     }
//   })
//   var mapStateToProps = function (state) {
//     // This component will have access to `appstate.heroes` through `this.props.heroes`
//     return {Doctors: state.Doctors}
//   }
//   var mapDispatchToProps = function (dispatch) {
//     return {
//       dispatch
//     }
//   }
//   module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(DoctorList)
// }

// )
import React from 'react'
  import {Component} from 'react'
  import DoctorRow from '../Components/DoctorRow.js'
  import {connect} from 'react-redux'
  import ApplicationConstants from '../Constants/Application.js'

  class DoctorList extends Component {

    componentDidMount () {
      this.props.dispatch({type: ApplicationConstants.LoadDoctors, dispatch: this.props.dispatch})
    }

    render () {
      var Doctors = []

      this.props.Doctors.forEach(function (doctor, index) {
        Doctors.push(<DoctorRow Doctor={doctor} Index={index} ></DoctorRow>)
      }, this)
      return (
        <div className='table-responsive'> <table className='table table-striped'>
          <thead>
            <tr>
              <th> Name </th>
              <th> Phone </th>
              <th> Address </th>
              <th> Speciality </th>
              <th> </th>

            </tr>
          </thead>
          <tbody>
            {Doctors}
          </tbody>
        </table> </div>)
    }
  }
  const mapStateToProps = (state) => {
    // This component will have access to `appstate.heroes` through `this.props.heroes`
    return {Doctors: state.Doctors}
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      dispatch
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(DoctorList)
