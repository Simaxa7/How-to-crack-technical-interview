## How do you memoize a component?

`React.memo` or `useMemo()`

```jsx
import React from "react"; 

function Child(props) {
  return (
      <h2>{props.name}</h2>
  );
} 

export default React.memo(Child); //Add React.memo() HOC to the child component
```

```jsx
import { useMemo } from "react";

const memoizedValue = useMemo(
    () => computeExpensiveValue(a, b),
    [a, b]
);
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
