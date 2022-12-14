## What hooks do Redux have?

`useSelector` -is analogous to `connect`’s mapStateToProps.    
`useDispatch` - replaces `connect`’s mapDispatchToProps but is lighter weight
```jsx
import React from "react";
import { connect } from "react-redux";
import { addCount } from "./store/counter/actions";

export const Count = ({ count, addCount }) => {
  return (
    <main>
      <div>Count: {count}</div>
      <button onClick={addCount}>Add to count</button>
    </main>
  );
};

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = { addCount };

export default connect(mapStateToProps, mapDispatchToProps)(Count);
```
```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "./store/counter/actions";

export const Count = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <main>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(addCount())}>Add to count</button>
    </main>
  );
};
```

**[Back to List of React Redux Questions](../React Interview Questions.md#react-redux)**
