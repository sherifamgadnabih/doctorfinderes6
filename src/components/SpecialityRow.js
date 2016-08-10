define(function (require, exports, module) {
  var React = require('react')
  var ApplicationConstants = require('../Constants/Application.js')
  var ReactRedux = require('reactRedux')
  var SpecialityRow = React.createClass({
    propTypes: {
      Speciality: React.PropTypes.object.isRequired
    },
    DeleteSpeciality: function () {
      this.props.dispatch({type: ApplicationConstants.SpecialityDeleted, SpecialityId: this.props.Speciality._id, Index: this.props.Index})
    },
    render () {
      return (
            <tr>
            <td> {this.props.Speciality.name} </td>
            <td> <a href='#/Specialities' onClick={this.DeleteSpeciality} > Delete </a> </td>
             </tr>
        )
    }
  }

  )
  var mapDispatchToProps = function (dispatch) {
    return {
      dispatch
    }
  }
  module.exports = ReactRedux.connect(mapDispatchToProps)(SpecialityRow)
})
