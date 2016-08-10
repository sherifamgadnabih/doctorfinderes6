define(function (require, exports, module) {
  var React = require('react')
  var ApplicationConstants = require('../Constants/Application.js')
  var hashHistory = require('reactRouter').hashHistory
  var ReactRedux = require('react-redux')
  var CreateSpeciality = React.createClass({
    name: '',
    handleChange: function (event) {
      var controlid = event.target.id
      var value = event.target.value
      if (controlid === 'name') {
        this.name = value
      }
    },
    onClick: function () {
      this.props.dispatch({type: ApplicationConstants.AddSpecialityAction, dispatch: this.props.dispatch, speciality: {name: this.name}})
     // hashHistory.push('/Specialities')
    },

    render () {
      var style = {

        marginTop: 60
      }

      return (
                <form style={style} role='form'>
                <h4> Create New Speciality </h4>
                    <div className='form-group'>
                        <label for='name'>Name: </label>
                        <input type='text' onChange={this.handleChange} className='form-control' id='name'/>
                    </div>
                    <button type='button' onClick={this.onClick} className='btn btn-default'>Submit</button>
                </form>
            )
    }

  })
  var mapDispatchToProps = function (dispatch) {
    return {
      dispatch
    }
  }

  module.exports = ReactRedux.connect(mapDispatchToProps)(CreateSpeciality)
})

