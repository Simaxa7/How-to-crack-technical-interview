## React memo VS useMemo

In simple terms, memoization is a process that allows us to cache the values of recursive/expensive function calls so that the next time the function is called with the same argument(s), the cached value is returned without re-calculate

`React.memo` - It will only render the component if there is any change in the props.

`useMemo()` - The specialty of useMemo() is that it will only recalculate the memoized value when one of the dependencies changes

**[Back to List of Questions](../React Interview Questions.md#core-react)**
