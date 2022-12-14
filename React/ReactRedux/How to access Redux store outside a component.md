## How to access Redux store outside a component?

Export the store from the module you called `createStore`. Then you are assured it will both be created

```jsx
const store = createStore(myReducer);
export default store;
```
```jsx
import {store} from './MyStore'
store.dispatch(
    //...
)
```

**[Back to List of React Redux Questions](../React Interview Questions.md#react-redux)**
