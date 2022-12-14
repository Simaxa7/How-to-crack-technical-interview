## What is the difference between mapStateToProps and mapDispatchToProps?

`mapStateToProps` This is used to get a new state that has been updated by another component

```jsx
const mapStateToProps = state => {
    list: getFixed(state.list, state.fixFilter)
  }

```

`mapDispatchToProps` - This is used to fire an event that can change the state
```jsx
  const mapDispatchToProps = (dispatch) => {
    onClick :(id) => {
        dispatch(toggleTodo(id))
    }
}
```

**[Back to List of React Redux Questions](../React Interview Questions.md#react-redux)**
