## What are props in React?
Props are arguments passed into React components. Props are immutable. We cannot modify the props from inside the component.
It gives a way to pass data from parent component to children components.

Classes Component:
```javascript
import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
    render() {
        return (
            <p>Show our prop: {this.props.ourReactProp}</p>
        )
    }
}

class Parent extends React.Component {
    render() {
        return (
            <Child ourReactProp='ourReactProp'  />
        )
    }
}
```
Functional Component:
```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const Child = (props) => {
    return (
        <p>Show our prop: {props.ourReactProp}</p>
    )
}

const ParentComponent = () => {
    return (
        <Child ourReactProp='ourReactProp' />
    )
}
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
