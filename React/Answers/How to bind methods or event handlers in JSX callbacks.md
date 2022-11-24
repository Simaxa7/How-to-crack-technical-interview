## How to bind methods or event handlers in JSX callbacks?

use bind:
```
class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Click happened');
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```

use array function when declaring:
```
handleClick = () => {
    console.log('Click happened');
}

<button onClick={this.handleClick}>
  {'Click me'}
</button>
```

use array function in callback:
```
handleClick() {
    console.log('Click happened');
}

render() {   
    return (<button onClick={() => this.handleClick()}>Click Me</button>)
}
```
Sometimes it can do an extra re-rendering  when you passed callback as prop to children in this case use bind

**[Back to List of Questions](../React Interview Questions.md#core-react)**
