## If Pure Component is better from the optimization point of view, why don't we use it by default?

When you create a function inside a render method, the shallow prop comparison will always return false for new props, and each render in this case will generate a new value for the render prop.

**[Back to List of Questions](../React Interview Questions.md#core-react)**
