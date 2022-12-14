## What is Flux?

It is not a framework or a library but a new kind of architecture that complements React and the concept of Unidirectional Data Flow.

The workflow between dispatcher, stores and views components with distinct inputs and outputs as follows:

|        |     |              |     |        |     |      |
|--------|-----|--------------|-----|--------|-----|------|
|        |     | 🠗           | ←   | Action | ←   | ←    |
|        |     | 🠗           |     |        |     | ↑    |
| Action | →   | Dispatcher   | →   | Store  | →   | View |


**[Back to List of React Redux Questions](../React Interview Questions.md#react-redux)**
