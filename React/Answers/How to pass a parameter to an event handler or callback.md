## How to pass a parameter to an event handler or callback?


```JavaScript
<button onClick={
    this.handleClick.bind(this, eventParam)
}>
    Click Me
</button>;
```

```JavaScript
handleClick = (eventParam) => () => {
    // we have access to eventParam
}

<button onClick={
    this.handleClick(eventParam)
}>
    Click Me
</button>;
```

```JavaScript
<button onClick={
    () => this.handleClick(eventParam)
}>
    Click Me
</button>;
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
