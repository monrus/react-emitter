import React from 'react'
import PropTypes from 'prop-types'

const Emitter = Component => {
  return class Emitter extends React.Component {
    static contextTypes = {
      emitter: PropTypes.object
    }
    render() {
      return React.createElement(Component, {
        emit: (event, ...values) => { this.context.emitter.emit(event, ...values) }
      })
    }
  }
}

export default Emitter
