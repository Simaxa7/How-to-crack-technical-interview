## What are stateful components
This is components with `this.state` or `useState`

```jsx
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    // ...
  }
}
```

```jsx
 import React, {useState} from 'react';

 const App = (props) => {
   const [count, setCount] = useState(0);

   return (
     // JSX
   )
 }
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
