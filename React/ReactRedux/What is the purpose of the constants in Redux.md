## What is the purpose of the constants in Redux?

prevent silly errors(mistake in words)
easy find all places where we use them
```jsx
export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_LIST = 'DELETE_LIST'
```
```jsx
// actions
import { ADD_ITEM, DELETE_LIST } from './actionTypes';

export function addItem(text) {
  return { type: ADD_ITEM, text }
}

export function deleteList() {
    return { type: DELETE_LIST }
}
```

```jsx
// reducers
import {ADD_TODO} from './actionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                {
                    text: action.text,
                }
            ];
        case DELETE_LIST:
            return [];
        default:
            return state
    }
}
```

**[Back to List of React Redux Questions](../React Interview Questions.md#react-redux)**
