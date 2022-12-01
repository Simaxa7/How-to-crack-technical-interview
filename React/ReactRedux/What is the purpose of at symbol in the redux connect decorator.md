## What is the purpose of at symbol in the redux connect decorator?

@ - it is a symbol for decorators in JS

without @
```jsx
const mapStateToProps = state => {
    list: getFixed(state.list, state.fixFilter)
}
const mapDispatchToProps = (dispatch) => {
    onClick :(id) => {
        dispatch(toggleTodo(id))
    }
}
class MyApp extends React.Component {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MyApp)

```
with @
```jsx
const mapStateToProps = state => {
    list: getFixed(state.list, state.fixFilter)
}
const mapDispatchToProps = (dispatch) => {
    onClick :(id) => {
        dispatch(toggleTodo(id))
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MyApp extends React.Component {
 
}
```

**[Back to List of React Redux Questions](../React Interview Questions.md#react-redux)**
