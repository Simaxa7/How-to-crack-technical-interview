## What is an action in Redux?
They are the only source of information for the store.  
Action in Redux just object or payload of information that you want to send to your store.

```jsx
export const ADD_ITEM = 'ADD_ITEM';

// actions
export function addItem(text) {
  return { type: ADD_ITEM, text }
}
```

**[Back to List of React Redux Questions](../React Interview Questions.md#react-redux)**
