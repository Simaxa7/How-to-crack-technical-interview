## How to dispatch an action on load?

action on load
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

const mapDispatchToProps = (fetchData) => {
    onClick :(id) => {
        dispatch(toggleTodo(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
```

action on init
```jsx
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import appInit from './store/actions/appInit';
import store from './store';

export default function App() {
  useEffect(() => store.dispatch(appInit()), []);
  return (
    <Provider store={store}>
      <div>
        Hello World
      </div>
    </Provider>
  );
}
```

**[Back to List of React Redux Questions](../React Interview Questions.md#react-redux)**
