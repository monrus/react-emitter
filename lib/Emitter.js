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
        emit: (event, ...values) => { this.context.emitter.emit(event, ...values) },
        addListener: (listener, callback) => { this.context.emitter.addListener(listener, callback)},
      })
    }
  }
}

export default Emitter
