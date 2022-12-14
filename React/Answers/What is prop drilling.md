## What is prop drilling?

When child should change parents state

```jsx
import React from "react";

export default class App extends React.Component{
  constructor() {
    super()
    this.state = {
      buttonColor: "red"
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor() {
    this.setState({ buttonColor: "green" })
  }

  render() {
    return (
        <>
            <p>Some description</p>
            <Button
                buttonColor={this.props.buttonColor}
                changeColor={this.props.changeColor}
            />
        </>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button
        type="button"
        onClick={this.props.changeColor}
        style={{ backgroundColor: this.props.buttonColor }}
      >
        change color
      </button>
    );
  }
}

```
But better you should use Redux, Context

**[Back to List of Questions](../React Interview Questions.md#core-react)**
