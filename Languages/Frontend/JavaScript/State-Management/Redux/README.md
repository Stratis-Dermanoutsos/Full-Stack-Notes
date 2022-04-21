# Redux

- [**Notes**](#redux---notes)
- [**Resources**](#redux---resources)

## Redux - Notes

***Redux*** is a ***JavaScript*** library for managing the state of your application.

Big applications have big application states and managing them gets more and more inconvenient as your app grows. This is where state management libraries like ***Redux*** come in.

***Redux*** follows a pattern called “*Single Source Of Truth*”, which means that we have only one place (called **Store**) where we store the only state for the whole application.

To create a `react-redux` project:

```bash
# Redux + JavaScript template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

***Redux*** has 3 main parts:

- [**Actions**](#actions)
- [**Reducers**](#reducers)
- [**Store**](#store)

### Actions

**Actions** are ***JavaScript*** objects that describe *WHAT* happened, but not *HOW* the app state changes.

We just send (dispatch) them to τhe **store** instance whenever we want to update the state of our application. The rest is handled by the **reducers**.

***Redux*** requires our **action** objects to contain a type field. This field is used to describe what kind of **action** we are dispatching and it should usually be a constant that you export from a file. More fields can be added in the **action** object and are completely up to the developer.

Example **action**:

```javascript
{ type: ADD_NOTE, title: 'Some Title', content: 'This is an action object' }
```

This **action** in activated when the user clicks the "*Add Note*" button and informs the **store** that we want to add a new Note.

#### Action Creators

They are functions that generate and return plain ***JavaScript*** objects.

The above **action** can be written as

```javascript
function addNote(title, content) {
  return { type: ADD_NOTE, title: title, content: content };
}
```

### Reducers

***Reducers*** are functions that define *HOW* the app state changes. In other words, they recalculate the new application state.

Whenever an **action** is dispatched to the **store**, the **action** gets passed to the **reducer**.

The **reducer** function takes two parameters:

- the previous app state
- the **action** being dispatched

It returns the new app state.

```javascript
(previousState, action) => newState
```

To deal with **reducer** complexity, we chunk them down in multiple, simpler **reducers** and later, we combine them with a ***Redux*** helper function called `combineReducers`.

The main reducer is conventionally called “*Root Reducer*”.

### Store

The **store** hold the state of the application.

It is actually an object, NOT a class.

It is possible to create multiple **stores**, this is against the pattern that ***Redux*** follows. We create only one **store** per application!

The values to be stored in it are completely up to the developer and they can be nested as much as needed.

### Store Provider

It is VERY important to give a provider to the App so it knows where the state is being stored.

This is quite simple and can be achieved by encapsulating the `<App />` component instance inside the Provider like so:

- Go to *index.(js|tsx)*
- Include the store and the Provider

  ```javascript
  import { store } from 'app/store';
  import { Provider } from 'react-redux';
  ```

- Change

  ```javascript
  <App />
  ```

  to

  ```javascript
  <Provider store={store}>
    <App />
  </Provider>
  ```

### Setup example

A convenient ***Redux*** file tree setup is

```text
redux/
|- actions/
|  |- actions.js
|- reducers/
|  |- reducers.js
|- store/
|  |- store.js
```

or, my personal choice,

```text
src/
|- app/
|  |- store.js
|- slices/
|  |- ...
|- components/
|  ...
```

### Simple todo project template

The template we'll use is the following (JavaScript)

```text
src/
|- app/
|  |- store.js
|- slices/
|  |- todosSlice.js
|- components/
|  |- Todos.jsx
|- App.js
|  ...
```

#### src/

##### app/

###### store.js

```javascript
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../slices/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    /* more reducers, if needed
     * eg. 
     * names: namesReducer,
     * etc
     */
  },
});
```

##### slices/

###### todosSlice.js

```javascript
import { createSlice } from '@reduxjs/toolkit';

// The initialState variable is pretty much self explanatory
const initialState = {
  value: []
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, action) => {
      /* Redux Toolkit allows us to write "mutating" logic in reducers.
       * It doesn't actually mutate the state but produces a brand new immutable state based off those changes.
       */
      state.value.push({
        id: Math.random(),
        text: action.payload,
        completed: false
      });
    },
    remove: (state, action) => {
      state.value = state.value.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { add, remove } = todosSlice.actions;

// The function below is called a selector and allows us to select a value from the state.
export const selectTodos = (state) => state.todos.value;

export default todosSlice.reducer;
```

##### components/

###### Todos.jsx

```javascript
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  add,
  remove,
  selectTodos
} from './slices/todosSlice';

export const Todos = () => {
  /*
   * We set the state of our todos using the useSelector hook and the selector variable from our todosSlice.
   * Also, we declare dispatch, a hook to access the redux dispatch function.
   */
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  // Local state, does not need to be in store as it's only used here.
  const [text, setText] = useState('This is a todo');

  return (
    <div>
      <ul>
        {/* We render our list, each item with its text, id and a remove button */}
        {/* Notice how we dispatch the remove reducer passing the item's id to the action's payload */}
        {todos.map(todo => (
          <li key={todo.id}>{todo.text} <button onClick={(e) => dispatch(remove(todo.id))}>X</button></li>
        ))}
      </ul>
      {/* Pretty simple input that binds to our state text */}
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      {/* A button to dispatch the add reducer */}
      <button onClick={() => dispatch(add(text))}>Add</button>
    </div>
  );
};
```

##### App.js

```javascript
import React from 'react';
import { Todos } from './components/Todos';

function App() {
  return (
    <Todos />
  );
}

export default App;
```

## Redux - Resources

- [Redux in 100 seconds (by Fireship)](https://youtu.be/_shA5Xwe8_4)
- [Redux Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
- [Redux documentation](https://redux.js.org/introduction/getting-started)
- [Redux CDN](https://cdnjs.com/libraries/redux)
- [Redux repository](https://github.com/reduxjs/redux)
- [Use Redux in Your React TypeScript App](https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/)
- [Full Redux tutorial in 5 minutes by freeCodeCamp.org](https://youtu.be/oD3miHerQbY)
- [Introduction to Redux](https://javascript.plainenglish.io/the-only-introduction-to-redux-and-react-redux-youll-ever-need-8ce5da9e53c6)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#redux)
