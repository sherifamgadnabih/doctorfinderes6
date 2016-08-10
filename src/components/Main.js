// define(function (require) {
//   var React = require('react')
//   var redux = require('redux')
//   var ReactDom = require('reactDom')
//   var CreateDoctor = require('../lib/Components/CreateDoctor.js')
//   var DoctorList = require('../lib/Components/DoctorList.js')
//   var SpecialityList = require('../lib/Components/SpecialityList.js')
//   var Router = require('reactRouter').Router
//   var Route = require('reactRouter').Route
//   var hashHistory = require('reactRouter').hashHistory
//   var Provider = require('reactRedux').Provider
//   var reducer = require('../lib/Stores/index.js')
//   var Spinner = require('reactSpinkit')
//   var $ = require('jquery')
//   $(document).ajaxStart(function () {
//     $('#loadingDiv').show()
//      $('#content').hide()
//   })
//   $(document).ajaxStop(function () {
//     setTimeout(function () {
//       $('#loadingDiv').hide()
//        $('#content').show()
//     }, 3000)
//   })
//   var MainComponent = React.createClass({

//     render () {
//       document.getElementsByTagName('body')
//       var store = redux.createStore(reducer)
//       return (
//         <div>
//         <div id='loadingDiv' style={{width: '100%', height: '100%', zIndex: 1000, display: 'none'}}>
//         <Spinner style={{width: '100%', height: '100%', zIndex: 1000}} spinnerName='circle'> </Spinner>
//          </div>
//          <div id='content' style ={{display:'none'}}>
//           <Provider store={store}>
//             <Router>
//               <Route name='default' history={hashHistory} path='/' component={DoctorList}/>
//               <Route name='default' history={hashHistory} path='/Specialities' component={SpecialityList}/>
//               <Route path='/Create' component={CreateDoctor}/>
//             </Router>

//           </Provider>
//           </div>
//         </div>
//       )
//     }
//   })

//   ReactDom.render(<MainComponent/>, document.getElementById('main'))
// }

// )
import React from 'react'
import {Component} from 'react'
import {createStore} from 'redux'
import {render} from 'react-dom'
// import CreateDoctor from '../lib/Components/CreateDoctor.js'
import DoctorList from '../Components/DoctorList.js'
// import SpecialityList from '../lib/Components/SpecialityList.js'
import {Router} from 'react-router'
import {Route} from 'react-router'
import {hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import reducer from '../stores/index.js'
import {Spinner} from 'react-spinkit'

let store = createStore(reducer)
class MainComponent extends Component {

  render () {
    return (
        <div>
        
          <Provider store={store}>
            <Router>
              <Route name='default' history={hashHistory} path='/' component={DoctorList}/>
            </Router>

          </Provider>
          </div>
      )
  }
}
export default MainComponent
