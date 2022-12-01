## What are controlled components?

In React, mutable state is typically kept in the state property of components, and only updated with setState()/useState.

```
handleChange(event) {
  this.setState({value: event.target.value.toUpperCase()})
}
```

* Does not maintain its internal state.
* Data is controlled by the parent component.
* Accepts its current value as a prop.
* Allows validation control.
* Better control over the form elements and data.

**[Back to List of Questions](../React Interview Questions.md#core-react)**
