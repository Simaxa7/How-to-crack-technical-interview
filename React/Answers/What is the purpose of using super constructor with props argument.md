## What is the purpose of using super constructor with props argument?

* Super(): It is used to call the constructor of its parent class.
* A child class constructor cannot make use of `this` reference until the `super()` method has been called.
* The main reason for passing `props` parameter to `super()` call is to access `this.props` in your child constructors.

**[Back to List of Questions](../React Interview Questions.md#core-react)**

