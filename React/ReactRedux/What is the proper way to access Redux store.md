## What is the proper way to access Redux store?

```jsx
<Provider context={MyContext} store={store}>
    <App />
</Provider>
```

```jsx
import React from 'react'
import { connect } from 'react-redux'
import { createStore } from "redux";

const store = createStore(count);

const mapStateToProps = state => {
    list: getFixed(state.list, state.fixFilter)
}
const mapDispatchToProps = (dispatch) => {
    onClick :(id) => {
        dispatch(toggleTodo(id))
    }
}

function App(store) {
    return (
        <div className="App">
            <p>{store.text}</p>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MyApp)
```

**[Back to List of React Redux Questions](../React Interview Questions.md#react-redux)**
