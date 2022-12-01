## How to set initial state in Redux?

You need to pass initial state as second argument to createStore:

```jsx
const rootReducer = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
})

const initialState = {
    todos: [{id: 123, name: 'example', completed: false}]
}

const store = createStore(
    rootReducer,
    initialState
)
```

**[Back to List of React Redux Questions](../React Interview Questions.md#react-redux)**