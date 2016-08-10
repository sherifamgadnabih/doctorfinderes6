import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/Main.js';

console.log(MainComponent)
// Render the main component into the dom
ReactDOM.render(<MainComponent />, document.getElementById('app'));
