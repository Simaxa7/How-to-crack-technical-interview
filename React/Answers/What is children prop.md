## What is children prop?
Some components don’t know their children ahead of time.

Use the `props.children` to pass children elements

```jsx
function Author(props) {
    return (
        <div className="Author">
            <div className="Author-title"> Best ever Author </div>
            {props.children}
        </div>
    );
}

function App() {
    return (
        <Author>
            <p>The awesome decription</p>
        </Author>
  );
}
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
