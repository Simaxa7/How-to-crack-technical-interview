# **Infrastructure/SDLC Questions**

---


## Table of Contents
HIGH - 16 (100%)

---

## Question 1
### What is SCRUM? HIGH
SCRUM is an agile framework. It provides principles of how to be better adaptive and performance
for organizations, teams, and people.

---

## Question 2
### SCRUM Roles HIGH
Product Owner:
- Clears user stories for the development team
- Sets priorities for the stories
- Responsible for initial planing
- Communicate with the rest of the company

SCRUM Master has strong knowledge in scrum processes
- SCRUM Master helps Product owner and development team
- Resolve team impediments

Development Team
- Self-organized, small team (3-5-7 developers, testers, designers, BA)
- Cross-functional, with all skills as a team necessary to create product Increment
- No titles and no sub teams.

---

## Question 3
### Ceremonies HIGH
or events.

Sprint Grooming(backlog refinement). Time:Last day of previous sprint:
- clarify requirement to use stories
- ask questions to Product Owner
- define how story can be developed and tested

Sprint planing. 1st day of sprint:
- reviews height priority stories
- select stories for sprint
- breaks stories into task and estimates tasks execution

Daily scrum / Daily meeting / Standup. Every day:
- Scrum master tracks and resolves challenges
- 10-15 min
- better face 2 face
- each team member describes: what is done / what is planned / challenges if any

Sprint review / Demo. Usually at the end of the sprint.
- Developers / Testers / BA responsible for feature demonstrates the work was done
- Receives feedback from customer.

Sprint retrospective:
- What was done well
- What could be done better
- Assign responsible person
- Set timelines for changes

---

## Question 4
### Artifacts HIGH

Product backlog - all features witch want owner

Sprint backlog - features for one sprint (usually 1 sprint takes 1-2 weeks, sometimes increased to 6 week)

Product increment -This is an updated application that we are making

---

## Question 5
### Agile Manifest HIGH
Agile Manifest provide main value and principles.
for example values:
- Individuals and interactions over processes and tools
- Working software over comprehensive documentation
- Customer collaboration over contract negotiation
- Responding to change over following a plan

---

## Question 6
### Scrum Cycle HIGH
It called sprint 1-2week but not more than 6 week.

---

## Question 7
### SCRUM Estimation HIGH
Each team member estimate task

Story Point / Planning Poker - used with cards. The numbers are usually in the Fibonacci sequence: 0, 1, 2, 3, 5, 8, 13, and 21.

T-Shirt Sizes - used with T-shirt sizes: extra small, small, medium, large, extra-large, etc.

Large/Uncertain/Small

The team chooses the easiest task and assigns it the minimum value. for example one story point. Time for implementing in hours is different for different team member,  junior/middle/senior developer.

---

## Question 8
### How do you estimate a task? HIGH
* I break the task into small tasks. A small problem can be estimated more precisely.
* I estimate in story points all such small tasks.

---

## Question 9
###  Testing Pyramid HIGH
User Interface (UI) tests are at the top of the Testing Pyramid because they involve the largest scope and are the most complex. UI tests check all the system layers from UI to databases and external services. (more complex)

Integration tests validate the interaction of a piece of code with external components. For this reason, they run slower than unit tests.

Unit tests are at the base of the Testing Pyramid because they take the least time and cost. They check the logic of a small function or class. If a unit test fails, it means there are problems with the code.

---

## Question 10
### Unit Tests HIGH
1. Focus on one specific piece of the system in isolation
2. Are easier to write, faster to execute, and cheaper to maintain
3. Have no external dependency―any external dependency is mocked
4. Let you know the exact piece of code where the error is

---

## Question 11
### Design Patterns. Definition HIGH
Design patterns are reusable solutions to commonly occurring problems in software design.

---

## Question 12
### Benefits of Patterns HIGH
* Patterns are proven solutions
* Patterns can be easily reused
* Patterns can be expressive(voc for developers)
---

## Question 13
### Creation Patterns HIGH
This pattern is provides various object creation mechanisms which increase flexibility and reuse of existing code
* Builder - constructs complex objects by separating construction and representation
* Factory method - creates objects without specifying the exact class to create
* Singleton - restricts object creation for a class to only one instance

---

## Question 14
### Behavioral Patterns HIGH
Behavioral design patterns are design patterns that identify common communication patterns among objects.

---

## Question 15
### SOLID Principles HIGH
1. [x] S - Single-responsibility Principle
```js
//Wrong way
class Animal {
    constructor(name: string){ }
    getAnimalName() { }
    saveAnimal(a: Animal) { }
}
//Correct way
class Animal {
    constructor(name: string){ }
    getAnimalName() { }
}
class AnimalDB {
    getAnimal(a: Animal) { }
    saveAnimal(a: Animal) { }
}
```
2. [x] O - Open-closed Principle
```js


//Wrong way
class CoderFilter {
    filterByName(coders, fullName) {
        return coders.filter(coder => coder.fullName === fullName)
    }
}

// if we want to sort not onle one this property we should use this way/
//Correct way
const filterByProp = (array, propName, value) =>
    array.filter(element => element[propName] === value)

```
3. [x] L - Liskov Substitution Principle
```js
class Rectangle {
  constructor(width, height) {
    this._width = width
    this._height = height
  }

  get width() { return this._width}
  get height() { return this._height}

  set width(value) { this._width = value }
  set height(value) { this._height = value }

  getArea() {
    return this._width * this._height
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size)
  }
  // not enough  
}

const square = new Square(2)
square.width = 3
console.log(square.getArea()) // 6 but we want 9

class Square extends Rectangle {
    constructor(size) {
        super(size, size)
    }
  // this is correct 
    set width(value) { this._width = this._height = value }
    set height(value) { this._width = this._height = value }
}

```

4. [x] I - Interface Segregation Principle
```js
class Phone {
  constructor() {
    if (this.constructor.name === 'Phone')
      throw new Error('Phone class is absctract')
  }

  call(number) {}
  takePhoto() {}
  connectToWifi() {}
}

// for Iphone - correct
class IPhone extends Phone {
    call(number) { console.log('Implementation') }
    takePhoto() { console.log('Implementation') }
    connectToWifi() { console.log('Implementation') }
}

// home basic phone - we can't use next methods takePhoto,connectToWifi
class Nokia3310 extends Phone {
    call(number) { console.log('Implementation') }
    takePhoto() { console.log ('do not have a camera') }
    connectToWifi() {console.log ('do not know what wifi is') }
}
```
5. [x] D - Dependency Inversion Principle
```js
class FileSystem {
  writeToFile(data) {
    // Implementation
  }
}

class PersistanceManager {
    saveData(db, data) {
        if (db instanceof FileSystem) {
            db.writeToFile(data)
        }
    }
}
//In this case, the high-level PersistanceManager module depends on the low-level module? we shuld some refactoring like that.
class PersistanceManager {
    saveData(db, data) {
        db.save(data)
    }
}


```

---

## Question 16
### CI/CD/CD HIGH

CI/CD combines two major practices―continuous integration (CI) and continuous delivery/continuous deployment (CD).

Continuous integration means that “members of a team integrate their work frequently” by “collaborating on a shared codebase, merging disparate code changes into a version control system (VCS), and automatically creating and testing builds”.

Continuous delivery means that “the software can be released to production at any time” by “automatically deploying builds to non-production environments after the continuous integration process completes”

Though the term is sometimes used interchangeably with continuous delivery, continuous deployment takes things one step further, meaning every change “automatically gets put into production” “without any operator intervention”.

---
