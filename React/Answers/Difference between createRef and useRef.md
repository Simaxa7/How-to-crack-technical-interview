## Difference between createRef and useRef?

The difference is that createRef will always create a new ref. In a class-based component, you would typically put the ref in an instance property during construction (e.g. this.input = createRef()). You don't have this option in a function component. useRef takes care of returning the same ref each time as on the initial rendering.

**[Back to List of Questions](../React Interview Questions.md#core-react)**
