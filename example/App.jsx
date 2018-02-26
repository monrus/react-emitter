import React from 'react'
import { Emitter, Listener } from '../lib'

class Child extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
  }
  componentDidMount() {
    this.props.onListener('change', (values) => {
      console.log(values)
    })
  }
  render() {
    return (
      <div>
        { this.state.value }
      </div>
    )
  }
}
const ChildListener = Listener(Child)

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
        <ChildListener />
      </div>
    )
  }
}
export default Emitter(App)

