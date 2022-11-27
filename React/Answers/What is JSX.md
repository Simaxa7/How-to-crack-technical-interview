## What is JSX?
It is a JavaScript syntax extension. JSX stands for JavaScript XML.

Basically it just provides syntactic sugar for the `React.createElement()`

example **JSX**:
```javascript
class Hello extends React.Component {
    render() {
        return <div>Hello</div>;
    }
}
```

example **React.createElement()**:
```javascript
class Hello extends React.Component {
    render() {
        return React.createElement('div', null, `Hello`);
    }
}
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**