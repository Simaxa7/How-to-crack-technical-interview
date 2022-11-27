## What is context?
Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree.

use for:
* such as the current authenticated user
* theme
* or preferred language.


const MyContext = React.createContext('light');


```
<MyContext.Provider value={/* some value */}>

</MyContext.Provider>
```


```
<MyContext.Consumer>
{value => /* render something based on the context value */}
</MyContext.Consumer
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
