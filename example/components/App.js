import React from 'react'
import { Emitter } from '../../lib'
import Child from './Child'

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <button
          defaultValue=""
          onClick={(e) => {
            debugger
            this.props.emit('change', e.target.value)
          }}
        >
          Кликни
        </button>
        <Child />
      </div>
    )
  }
}
export default Emitter(App)

