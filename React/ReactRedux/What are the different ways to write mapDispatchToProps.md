## What are the different ways to write mapDispatchToProps?

```jsx
const mapDispatchToProps = (dispatch) => ({
 action: () => dispatch(action())
})
```

```jsx
const mapDispatchToProps = { action }
```

```jsx
const mapDispatchToProps = (dispatch) => ({
 action: bindActionCreators(action, dispatch)
})
```

**[Back to List of React Redux Questions](../React Interview Questions.md#react-redux)**
