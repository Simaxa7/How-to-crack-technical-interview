# JavaScript Interview Questions
Number of questions: Total = 95; High = 50; Medium = 36; Low = 9.

## Table of Contents

## Week 1 (Questions with High priority)
Number of questions: High = 50.
Estimate: ~30m*50 = 25h / 5d = 5h per day.

--- 

# 1 Data Types
## Question 1
### 1.1 What are data types in javascript? High
There are 7 primitive and others are complex data types in JavaScript.

Seven primitive data types:
- number for numbers of any kind: integer or floating-point, integers are limited by ±(2^53-1).
- bigint for integer numbers of arbitrary length.
- string for strings. A string may have zero or more characters, there’s no separate single-character type.
- boolean for true/false.
- null for unknown values – a standalone type that has a single value null.
- undefined for unassigned values – a standalone type that has a single value undefined.
- symbol for unique identifiers.

non-primitive data type:
- object for more complex data structures.

---

## Question 2 
### 1.2 What are primitive data types? High 
Seven primitive data types:
- number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
- bigint for integer numbers of arbitrary length.
- string for strings. A string may have zero or more characters, there’s no separate single-character type.
- boolean for true/false.
- null for unknown values – a standalone type that has a single value null.
- undefined for unassigned values – a standalone type that has a single value undefined.
- symbol for unique identifiers.
- 
---

## Question 3
### 1.3 What is the difference between primitives vs objects? High
Primitive values are immutable — they cannot be changed after being created.

The variable may be reassigned to a new value

In primitive passed value, but in non-primitive passed reference


---

## Question 4
### 1.4 What is coercion in JavaScript? High
Type coercion is the automatic conversion of values from one data type to another.

---

## Question 5
### 1.5 Do you know what Autoboxing in JS is? High
primitive is wrapped into an object.
This gives us access to the prototype methods and properties.( example: `String.prototype` or `Number.prototype`)

`const name = "Pavel"` 

`console.log(typeof name) // string`

`console.log(name.length) // 5`

---

## Question 6
### 1.6 What is the difference between == and === operators? High

The == operator checks if two values are equal. if types is different first step it is coercion.

`2 == 2 // true`

`"2" == 2 // true`

The === operator at first checks type than checks if two values are equal.

```
"2" === 2 // false
"2" === 2 // true
```

---

## Question 7
### 1.7 What is undefined data type? High

Variable was created but value didn't set up.

---

## Question 8
### 1.8 What is null value? High

It’s just a special value which represents “nothing”, “empty” or “value unknown”.

---

## Question 9
### 1.9 What does isNaN function do? High
If value is NaN this function return true. 
`isNaN(x) `
if x = NaN result will be true

---

## Question 10
### 1.10 What does NaN value mean? High

standing for Not a Number, is a member of a numeric data type, is a number that is not a legal number

```
var a = NaN;
var b = NaN;
console.log(a === b ) // false
console.log(a == b ) // false
```

how to get a NaN
```
'10'/'2a' // NaN
'10a'/2 // NaN
'10'/'2' // 5
10/'2' // 5
```

---

## Question 11
### 1.11 What is the difference between null and undefined? High
`undefined` is a default value for all uninitialized values. `null` is a sign that a variable was marked as having to value

---

# 2 Objects, Classes, Prototypal inheritance

---

## Question 14
### 2.1 How do you copy properties from one object to others? High
Shallow Copy - we copy only the first level of nesting, if the property values in the first level are links (not primitives), then the links will be copied
```javascript
let clonedObj1 = {}
let obj1 = { propA: true, propB: true };
let obj2 = { propC: true };

Object.assign(clonedObj1, obj1, obj2);

let clonedObj2 = Object.assign({}, obj1);

let clonedObj3 = { ...obj1 };
```

Deep Copy
```javascript
JSON.parse(JSON.stringify(obj))
```
JSON.stringify() does not copy functions.

`structuredClone(obj)`

Lodash also provides a utility method _.cloneDeep() for deep cloning of objects in JavaScript.

also you can use recursion and write code 

```js
const deepCopyFunction = (originalObject) => {
    // if originalObject is not an object - Return the value 
    if (typeof originalObject !== "object" || originalObject === null) {
        return originalObject
    }
    // you can add additional conditionals for checking 
    // instanceof Date, instanceof String, instanceof Number, instanceof Boolean, instanceof RegExp
    // Create an [] or {} 
    let outObject = Array.isArray(originalObject) ? [] : {}
    for (let key in originalObject) {
        outObject[key] = deepCopyFunction(originalObject[key]) // Recursion call
    }

    return outObject
}

const a = {b:1, c:{d:1}}
const res = deepCopyFunction(a)
console.log(a) //{b: 1, c: {…}}
console.log(res) //{b: 1, c: {…}}
console.log(a.c == res.c) //false
```

---

## Question 15
### 2.2 What are classes in ES6? High
This is syntactic sugar over prototypes

---


## Question 16
### 2.3 Explain how prototypal inheritance works? High
All objects have a hidden property named `.prototype`. This property can be `null` or referenced to another object. When we try to read a property, and we can't find this property the next step we try to find this property in our .prototype

---

# 3 Context, Scope and Closure

---

## Question 28
### 3.1 How do you assign default values to variables? High

`const a = 3`
```javascript
const b = a || 5
```


```javascript
function multiply(b, a = 5) {
    return a * b;
}
```

if our variable `a` not exist, we get default value= 5

---

## Question 29
### 3.2 What is the difference between let, const and var? High
`var` - is scoped by **function** scope, the link to value **can** be reassigned

`let` - is scoped by **block(function or if/else ... or just {})** scope, the link to value **can** be reassigned

`const` - is scoped by **block(function or if/else ... or just {})** scope, the link to value **can't** be reassigned

---

## Question 30
### 3.3 What are the differences between undeclared and undefined variables? High

`undeclared` - variable doesn't exist.

`undefined` - variable exist but the value didn't set up.

---

## Question 31
### 3.4 What are global variables? High
These variables are declared in the global scope and available in the `window`'s scope.

---

## Question 32
### 3.5 What is Hoisting? High
Is a feature which allows function and variables to be available before they are declared in the script.

var - variables are hoisted. variables are hoisted without setup value.

let and cons' - they have a temporary dead zone until are they a not declared

---

## Question 33
### 3.6 What is scope in javascript? High
The scope for a variable is the place where the variable is visible and accessible.

---

## Question 34
### 3.7 What is the closure? High
It is when we are catching values by the function where it was defined

---

## Question 35
### 3.8 How does closure implemented in the javascript? High

```javascript
const fun = (function increase() {
    const closuredValue = 9;
    return function(val) {
        return closuredValue-val;
    }
})()

console.log(fun(4)); // 9-4=5
```

```javascript
const fun2 = (function(){
    const closuredValue2 = 2;
    return {
        inc: function(el){
            return el+closuredValue2
        },
        mult: function(el){
            return el*closuredValue2
        }
    }
})()
console.log(fun2.inc(5)) //2+5=7
console.log(fun2.mult(5)) // 2*5=10
```

---

## Question 36
### 3.9 What is the difference between Call, Apply and Bind? High
Bind returns new function with new context(`this`) while Call and Apply calls the function immediately

- Call - accepts list of arguments
- Apply - accepts array of arguments
- Bind - accepts array of arguments

---

## Question 37
### 3.10 What does 'this loses context' mean? High
this happens when 'this' keyword does not refer to any object anymore.
```javascript
const fn = function() {
    return this;
};

const obj = { fn };
const myFn = obj.fn;

console.log(obj.fn()) //{fn:f}
console.log(myFn()) // null or window;
```

---

# 4 JSON

---

## Question 41
### 4.1 What is JSON and its common operations? High
JSON is a universal data transaction format. It supports basic primitive types, objects and arrays and used to transmitting and storing data.

---

## Question 42
### 4.2 How do you parse a JSON  string? High
JSON.parse()

---

## Question 43
### 4.3 What is the purpose JSON stringify? High
to converting JavaScript data into a JSON string.

---

# 5 Array methods

---


## Question 46
### 5.1 What array methods do you know? High

.forEach(), .map(), .filter(), .reduce(), .reduceRight(), .every(), .some(), .sort();

.push(). pop(), .shift(), .unshift();

.join(), .reverse(), 

.indexOf(), .lastIndexOf()

Array.isArray(value)

.flat(), .fill();

.keys(), values(), .entries();

---

## Question 47
### 5.2 What is the difference between Array.forEach() and Array.map()? High

`const newArray = array.map` returns new array.

`array.forEach( (element, index, **arr**) => { console.log(element, index, arr)})` returns undefined. If you change something in **arr** it is mutated original array 

---

# 6 Functions

---

## Question 52
### 6.1 What are the lambda or arrow functions? High
allows shorthand syntax

'arrow functions' don't have:
- this (inherits parent context )
- arguments
- super
- capacity to used as a constructor

`(el1, el2)=>{return el1+el2}`

`el => el+1`

---

## Question 53
### 6.2 What is a pure function? High
is a function that always returns the same result if the same arguments are passed(does not affect outside environment)

---

## Question 54
### 6.3 What is IIFE(Immediately Invoked Function Expression)? High
It starts immediately at the time of creation.

---

## Question 55
### 6.4 What is a callback function? High

This is a function which provided as a parameter to another function.

---

# 7 Async JavaScript

---



## Question 62
### 7.1 What is a promise? High
Promise is a representation of value which will appear later in time.
Promise object which can be fulfilled or rejected or pending

```javascript
const count = true;

let countValue = new Promise(function (resolve, reject) {
if (count) {
resolve("There is a count value.");
} else {
reject("There is no count value");
}
});

console.log(countValue);
```

---

## Question 63
### 7.2 Why do we need a promise? High
Promises are needed to handle asynchronous operations

---

## Question 64
### 7.3 List all states of a promise? High
`fulfilled` - the operations were completed successfully.

`rejected` - the operations have failed.

`pending` is the initial state. Just waiting when process will be completed(after completed set uo a state to `fulfilled` or `rejected` ).

---

## Question 65
### 7.4 Why do we need callbacks? High
- A callback is a function passed as an argument to another function.
- A callback is a function which is to be executed after another function has finished execution.
- Callback can synchronous or asynchronous.
 
---

## Question 66
### 7.5 What is a callback hell? High
- Callback is a deeply nested chain of callbacks.
- Each callback depends/waits on the previous callback
---

## Question 67
### 7.6 What is promise chaining? High
Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining.
Promise Chaining provides a more readable and maintainable code structure.

---

## Question 68
### 7.7 What is the purpose of using setTimeout? High

The global setTimeout() method sets a timer which executes a callback function or specified piece of code once the timer expires.

`const myTimeout = setTimeout(function, delay, param1, param2)`

- function - The callback function to execute. (required)
- delay - Number of milliseconds to wait before executing. (optional default = 0 milliseconds)
- `param1`, `param2` - you can provide parameters for callback  function

Use the `clearTimeout(myTimeout)` method to prevent the callback function from starting

---

## Question 69
### 7.8 What is the purpose of using setInterval? High
The setInterval() method calls a function at specified intervals (in milliseconds).
`const myInterval = setInterval(function, time, param1, param2)`

- function - The callback function to execute. (required)
- time - The execution interval. Number of milliseconds.
- `param1`, `param2` - you can provide parameters for callback  function

Use the `clearInterval(myInterval)` method to prevent the callback function from starting

---

## Question 70
### 7.9 What is an event loop? High
Event loop is an architecture of JavaScript interpreter allowing it to process code. The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue.


---

## Question 71
### 7.10 What is call stack? High
The Call Stack is a data structure which records basically where in the program we are. If we step into a function, we put it on the top of the stack. If we return from a function, we pop off the top of the stack.

---

# 8 Common

---

## Question 74
### 8.1 How do you validate an email in javascript? High
Define a regular expression for validating email address

## Question 75
### 8.2 What are modules? High
Module is a JavaScript file which contains import or export statements.

## Question 76
### 8.3 Why do you need modules? High
We need modules to break the code into small logical parts

## Question 77
### 8.4 What is a rest parameter? High
Rest Parameter allows a function to combine all parameters to one array variable `restParam`.

```javascript
function fn( ...restParam) {
    //code
}
```

You can define few parameters (for example `a` and `b` ) and use Rest Parameter to combine all others parameters to one array variable `restParam`.

```javascript
function fn( a, b, ...theArgs) {
  //code
}
```

## Question 78
### 8.5 What is a spread operator? High
The spread operator is a new feature in JavaScript ES6. It takes in an iterable (for example an array, object) and expands it into individual elements.

```javascript
const { a, b } = { a:1, b:2 }
console.log('a= ', a, 'b= ', b) // a= 1 b= 2
```

```javascript
const arr = [1,2,3,4,5]
const newArr = [0, ...arr, 6,7]
console.log('newArr= ',newArr) //newArr= [0, 1, 2, 3, 4, 5, 6, 7]
```

```javascript
const str ="Pavel"
const newArr = [...str]
console.log('newArr= ',newArr) // newArr = ['P', 'a', 'v', 'e', 'l']
```


## Question 79
### 8.6 What is nodejs? High

nodejs using for running web applications outside the client's browser.
- cross-platform JavaScript runtime environment and library
- open-source

---


# 9 Browser API  

---


## Question 87
### 9.1 What is the difference between window and document? High
`window.`
Windows is the main JavaScript object and refers to the whole browser windows with different APIs.

`window.document`Document is an API for DOM tree.
