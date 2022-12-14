## What are stateless components.
This is components without `this.state` or `useState`

 import React, ~~{useState}~~ from 'react';

 const App = (props) => {

   ~~const [count, setCount] = useState(0);~~

   return ( console.log('JSX') )
 }

**[Back to List of Questions](../React Interview Questions.md#core-react)**
