## How to make AJAX request in Redux?

You should use middleware which allows you to define async actions like `redux-thunk`

```jsx
export function fetchBook() {
    return dispatch => {
        fetch('/books/', (response) => {
            response.status == 200
               ? dispatch(setBook(response.json))
               : dispatch(someError)
        })
    }
}

function setBook(data) {
 return { type: 'SET_BOOKS', data: data };
}
```

**[Back to List of React Redux Questions](../React Interview Questions.md#react-redux)**
