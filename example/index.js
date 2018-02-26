import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { EmitterProvider } from '../lib'

const AppProvider = EmitterProvider(<App />) // eslint-disable-line

ReactDOM.render(
  <AppProvider />,
  document.getElementById('root'), // eslint-disable-line
);
