// define(function (require, exports, module) {
//   var React = require('react')
//   var ApplicationConstants = require('../Constants/Application.js')
//   var ReactRedux = require('reactRedux')
//   var DoctorRow = React.createClass({
//     propTypes: {
//       Doctor: React.PropTypes.object.isRequired
//     },
//     DeleteDoctor: function () {
//       this.props.dispatch({type: ApplicationConstants.DoctorDeleted, Index: this.props.Index, doctorID: this.props.Doctor._id})
//     },
//     render () {
//       return (
//             <tr>
//             <td> {this.props.Doctor.name} </td>
//             <td> {this.props.Doctor.phone} </td>
//             <td> {this.props.Doctor.address} </td>
//             <td> {this.props.Doctor.Speciality === null ? '' : this.props.Doctor.Speciality.name} </td>
//             <td> <a href='#' onClick={this.DeleteDoctor} > Delete </a> </td>
//              </tr>
//         )
//     }
//   }

//   )
//   var mapDispatchToProps = function (dispatch) {
//     return {
//       dispatch
//     }
//   }

//   module.exports = ReactRedux.connect(mapDispatchToProps)(DoctorRow)
// })

import React from 'react'
  import {Component} from 'react'
  import ApplicationConstants from '../Constants/Application.js'
  import {connect} from 'react-redux'

  class DoctorRow extends Component {

    DeleteDoctor () {
      this.props.dispatch({type: ApplicationConstants.DoctorDeleted, Index: this.props.Index, doctorID: this.props.Doctor._id})
    }
    render () {
      return (
            <tr>
            <td> {this.props.Doctor.name} </td>
            <td> {this.props.Doctor.phone} </td>
            <td> {this.props.Doctor.address} </td>
            <td> {(this.props.Doctor.Speciality === null || this.props.Doctor.Speciality === undefined) ? '' : this.props.Doctor.Speciality.name} </td>
            <td> <a href='#' onClick={this.DeleteDoctor.bind(this)} > Delete </a> </td>
             </tr>
        )
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      dispatch
    }
  }
  export default connect(mapDispatchToProps)(DoctorRow)
