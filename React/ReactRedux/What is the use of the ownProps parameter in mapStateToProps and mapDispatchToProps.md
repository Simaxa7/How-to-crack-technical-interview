## What is the use of the ownProps parameter in mapStateToProps and mapDispatchToProps?

```
function mapStateToProps(state, ownProps?)
```
Arguments:
* state
* ownProps (optional)

```jsx
const mapStateToProps = (state, ownProps) => {
    return {
        data: {
            state, 
            ownProps, 
            hi:'Hi Pavel'
        }
    }
}
```

**[Back to List of React Redux Questions](../React Interview Questions.md#react-redux)**
