## What is state in React
State allows us to manage changing data in an application.

Classes component. `this.state`
```javascript
class AccessToState extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      access: true
    }
  }

  render() {
    return (
        <p>Do we have a variable in state access? {this.state.access}</p>
    )
  }
}

```

Functional component. Hook. Use state.

```javascript
const AccessToState = () => {
  const [access, setAccess] = useState(0);

    return (
        <p>Do we have a variable in state access? {access}</p>
    )
};
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
