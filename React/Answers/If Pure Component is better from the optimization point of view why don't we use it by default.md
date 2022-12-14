## If Pure Component is better from the optimization point of view, why don't we use it by default?

**not simple flat objects/props:**  
PureComponent is only great with simple flat objects/props or by using something like ImmutableJS to detect changes in any object with a simple comparison.

**checking the props is wasted work:**  
to avoid pure components when the component is small (quick to render) and you expect the component to generally be called with different props each time. Because if that's the case, then checking the props is wasted work.

**[Back to List of Questions](../React Interview Questions.md#core-react)**
