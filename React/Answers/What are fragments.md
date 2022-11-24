## What are fragments?
In `return` you can provide only one child. If you want return more? you should wrap them. But you don't want to create additional `div` for wrapper.
```jsx
//full form
return (
    <React.Fragment>
        <Child1 />
        <Child2 />
    </React.Fragment>
)
//short form
return (
    <>
        <Child1 />
        <Child2 />
    </>
)

```

In short form you can't provide props

**[Back to List of Questions](../React Interview Questions.md#core-react)**
