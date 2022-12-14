## What is the purpose of callback function as an argument of setState()?

`setState` is asynchronous the callback function is used for any post action.

```jsx
handleButtonClicked = evt => {
    this.setState({name: evt.currentTarget.value})
    this.props.callback(this.state.name) // Will send the old value for name
}
```

```jsx
handleButtonClicked = evt => {
    this.setState({name: evt.currentTarget.value}, () => {
        this.props.callback(this.state.name) // Will send the new value for name
    })
}
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
