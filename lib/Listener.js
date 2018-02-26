import React from 'react'
import PropTypes from 'prop-types'

const Listener = Component => {
  return class extends React.Component {
    static contextTypes = {
      emitter: PropTypes.object
    }
    render() {
      return React.createElement(Component, {
        onListener: (listener, callback) => { this.context.emitter.addListener(listener, callback)},
      })
    }
  }
}

export default Listener
