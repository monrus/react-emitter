import React from 'react'
import PropTypes from 'prop-types'

const Emitter = Component => {
  return class Emitter extends React.Component {
    static contextTypes = {
      emitter: PropTypes.object
    }
    render() {
      return React.createElement(Component, {
        ...this.props,
        addListener: (eventType, callback) => this.context.emitter.addListener(eventType, callback),
        once: (eventType, callback) => this.context.emitter.once(eventType, callback),
        removeAllListeners: (eventType) => { this.context.emitter.removeAllListeners(eventType) },
        listeners: (eventType) => this.context.emitter.listeners(),
        emit: (event, ...args) => { this.context.emitter.emit(event, ...args) }
      })
    }
  }
}

export default Emitter
