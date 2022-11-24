## Is it possible to use React without JSX?
JSX is not a requirement for using React. Using React without JSX is especially convenient when you don't want to set up compilation in your build environment

example **React.createElement()**:
```javascript
class Hello extends React.Component {
    render() {
        return React.createElement('div', null, `Hello`);
    }
}
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**