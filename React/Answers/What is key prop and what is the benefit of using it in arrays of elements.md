## What is "key" prop and what is the benefit of using it in arrays of elements?

Key prop helps React identify which items have changed, are added, or are removed.

```javascript
const todoItems = todos.map( (text, id ) =>
  <li key={id}>
    {text}
  </li>
)
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
