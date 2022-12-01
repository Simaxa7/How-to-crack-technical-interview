## How to use connect from React Redux?


`apStateToProps` This is used to get a new state that has been updated by another component
`mapDispatchToProps` - This is used to fire an event that can change the state
```jsx
import React from 'react'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
      return (<div>{this.props.isLoaded ? 'Loaded' : 'Not loaded'} </div>)
  }
}

const mapStateToProps = (state) => ({
  isLoaded: state.isLoaded
})

const mapDispatchToProps = { fetchData }

export default connect(mapStateToProps, mapDispatchToProps)(App)
```

**[Back to List of React Redux Questions](../React Interview Questions.md#react-redux)**
