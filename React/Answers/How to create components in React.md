## How to create components in React?

Function Components:
```javascript
function Hello(){
  return <div> Hello World </div>;
}

const Hello = () =>
    <div> Hello World </div>;

```

Class Components:
```javascript
import React from 'react'
class Hello extends React.Component {
  render(){
    return <div> Hello World </div> 
  }
}
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
