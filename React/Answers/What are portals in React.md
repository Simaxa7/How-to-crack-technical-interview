## What are portals in React?

portals can be used to render an element outside its parent component's DOM node while preserving its position in the React hierarchy

`ReactDOM.createPortal(child, container)`
* The first argument (child) is any component we want to render, such as an element, string, or fragment
* The second argument (container) is a DOM element.

A typical use case for portals is when a parent component has an overflow: hidden or z-index style, but you need the child to visually “break out” of its container. For example, dialogs, hover-cards, and tooltips.
```html
<div id="root"></div>
<div id="portal"></div>
```
```jsx
class Portal extends Component {
  render() {
  
    // Creating portal
    return ReactDOM.createPortal(
      <button >
        Click
      </button>,
      document.getElementById('portal')
    );
  }
}
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
