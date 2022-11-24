## Why should we not update the state directly?
It won't re-render the component
```JavaScript
this.state.text = 'Hi' //do not do it
```

Right way: use `setState()`. It's an update to a component's state object after that will be re-rendered.

```JavaScriptthis
this.setState({ text: 'Hi' })
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
