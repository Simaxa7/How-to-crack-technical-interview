## What is the difference between HTML and React event handling?

* Syntax:

**HTML**: `<button onclick='pushButton()'/>`
all small letter  `onclick` and you should call `()`

**React**: `<button onClick={pushButton}/>` We use camelCase (`onClick`)

* Prevent default behavior:

**HTML**, you can return false to prevent default behavior:

`<a href='#' onclick='console.log("The link was clicked."); return false;' />`

**React**: you must call preventDefault() explicitly:
```jsx
function handleClick(event) {
    event.preventDefault()
    console.log('The link was clicked.')
}
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
