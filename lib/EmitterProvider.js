import React from 'react'
import PropTypes from 'prop-types'
import { EventEmitter } from 'fbemitter'

const EmitterProvider = Component => {
  return class extends React.Component {
    static childContextTypes = {
      emitter: PropTypes.object
    }
    constructor() {
      super()
      this.emitter = new EventEmitter()
    }
    getChildContext() {
      return {
        emitter: this.emitter
      }
    }
    render() {
      return React.createElement(Component, this.props)
    }
  }
}

export default EmitterProvider
