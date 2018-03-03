# react-emitter

### USAGE

react-emitter contains a ``EmitterProvider`` and ``Emitter`` decorators.

``EmitterProvider`` creates an event emitter instance and add it to the context.
``Emitter`` takes the event emitter from context and passes it to the decorated component. ``Emitter`` pass next methods:

* ``addListener(eventType, callback)`` - Register a specific callback to be called on a particular event. A token is returned that can be used to remove the listener.
* ``once(eventType, callback)`` - Similar to addListener() but the callback is removed after it is invoked once.
* ``removeAllListeners(eventType)`` - Removes all of the registered listeners. eventType is optional, if provided only listeners for that event type are removed.
* ``listeners(eventType)`` - Return an array of listeners that are currently registered for the given event type.
* ``emit(eventType, ...args)`` - Emits an event of the given type with the given data. All callbacks that are listening to the particular event type will be notified.

### EXAMPLE
```js
import { EmitterProvider, Emitter } from 'react-emitter'

class Child extends React.Component {
  componentDidMount() {
    this.listener = this.props.addListener('click', () => {
      console.log('click')
    })
    this.onceListener = this.props.once('click', () => {
      console.log('click') 
    })
  }
  componentWillUnmount() {
    this.listener.remove()
  }
}
const WrappedChild = Emitter(Child)

const App = Emitter(({ emit }) => {
  return (
    <div>
      <button onClick={() => emit('click')}>
        Click me
      </button>
      <WrappedChild />
    </div>
  )
})

export default EmitterProvider(App)
```
