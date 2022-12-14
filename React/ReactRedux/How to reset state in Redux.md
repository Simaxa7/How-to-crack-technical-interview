## How to reset state in Redux?


if you have one or two reducers
```jsx
const usersDefaultState = [];

const users = (state = usersDefaultState, { type, payload }) => {
    switch (type) {
        case 'RESET_APP':
            return usersDefaultState;
        case 'ADD_USER':
            return [...state, payload];
        default:
            return state;
    }
};

const articlesDefaultState = [];

const articles = (state = articlesDefaultState, { type, payload }) => {
    switch (type) {
        case 'RESET_APP':
            return articlesDefaultState;
        case 'ADD_ARTICLE':
            return [...state, payload];
        default:
            return state;
    }
};
```
if you have more than 2 reducers you should use `combineReducers`
```jsx
import { combineReducers } from 'redux';

const usersDefaultState = [];

const users = (state = usersDefaultState, { type, payload }) =>    { 
    switch (type) {
        case 'RESET_APP_USERS':
            return usersDefaultState;
        case 'RESET_APP':
            return usersDefaultState;
        case 'ADD_USER':
            return [...state, payload];
        default:
            return state;
    }
}

const articlesDefaultState = [];

const articles = (state = articlesDefaultState, { type, payload }) => {
    switch (type) {
        case 'RESET_APP_ARTICLES':
            return articlesDefaultState;
        case 'RESET_APP':
            return articlesDefaultState;
        case 'ADD_ARTICLE':
            return [...state, payload];
        default:
            return state;
    }
}

const allReducers = combineReducers({
  users,
  articles
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_APP') {
        state = undefined; // not null
    }

    return allReducers(state, action);
}
// exampe: Excluding users
const rootReducerWithoutUsers = (state, action) => {
    if (action.type === 'RESET_APP') {
        const { users } = state;
        state = { users };
    }

    return allReducers(state, action);
}
```

**[Back to List of React Redux Questions](../React Interview Questions.md#react-redux)**
