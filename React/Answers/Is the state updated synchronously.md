## Is the state updated synchronously?

State updates are **asynchronous** for classes components and for hooks

SetState() does not immediately mutate this.`state` but creates a pending state transition. Accessing `this.state` after calling this method can potentially return the existing value.

**[Back to List of Questions](../React Interview Questions.md#core-react)**
