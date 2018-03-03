import React from 'react'
import { Emitter } from '../../lib'
import Child from './Child'

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <input
          defaultValue=""
          onChange={(e) => {
            this.props.emit('change', e.target.value)
          }}
        />
        <Child />
      </div>
    )
  }
}
export default Emitter(App)

