define(function (require, exports, module) {
  var React = require('react')
  var store = require('../Stores/Doctors.js')
  var SpecialityRow = require('../Components/SpecialityRow.js')
  var ApplicationConstants = require('../Constants/Application.js')
  var CreateSpeciality = require('../Components/CreateSpeciality.js')
  var ReactRedux = require('reactRedux')

  var SpecialityList = React.createClass({
    componentDidMount: function () {
      this.props.dispatch({type: ApplicationConstants.LoadSpecialities, dispatch: this.props.dispatch})
    },
    render () {
      var Specialities = []

      this.props.Specialities.forEach(function (speciality, index) {
        Specialities.push(<SpecialityRow Speciality={speciality} Index={index}></SpecialityRow>)
      }, this)
      return (
        <div className='table-responsive'> <table className='table table-striped'>
          <thead>
            <tr>
              <th> Name </th>
              <th> </th>

            </tr>
          </thead>
          <tbody>
            {Specialities}
          </tbody>
        </table>
        <CreateSpeciality> </CreateSpeciality>
        </div>)
    }
  })
  var mapStateToProps = function (state) {
    // This component will have access to `appstate.heroes` through `this.props.heroes`
    return {Specialities: state.Specialites}
  }
  var mapDispatchToProps = function (dispatch) {
    return {
      dispatch
    }
  }
  module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(SpecialityList)
}

)
