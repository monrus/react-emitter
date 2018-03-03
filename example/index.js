import ReactDOM from 'react-dom'
import React from 'react'
import { EmitterProvider } from 'react-emitter'
import App from './components/App'

const AppProvider = EmitterProvider(App) // eslint-disable-line

ReactDOM.render(
  <AppProvider />,
  document.getElementById('root'), // eslint-disable-line
);
