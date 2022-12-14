## What are forward refs?
The forwardRef method in React allows parent components to move down (or “forward”) refs to their children.

```jsx
const ButtonElement = React.forwardRef((props, ref) => (
    <button ref={ref} className="CustomButton">
        {props.children}
    </button>
));

// Create ref to the DOM button:
const ref = React.createRef();
<ButtonElement ref={ref}>{'Forward Ref'}</ButtonElement>
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
