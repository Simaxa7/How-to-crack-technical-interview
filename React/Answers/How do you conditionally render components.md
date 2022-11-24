## How do you conditionally render components?

```jsx
<div>
    { exist && <p>This number exists </p>}
</div>

<div>
    { exist || <p>This number does not exist </p>}
</div>

<div>
    {
        exist 
            ? <p>This number does not exist </p>
            : <p>This number does not exist </p>
    }
</div>

```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
