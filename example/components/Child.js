import React from 'react'
import { Emitter } from '../../lib'

class Child extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
  }
  componentDidMount() {
    this.props.addListener('change', (value) => {
      this.setState({
        value,
      })
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
export default Emitter(Child)
