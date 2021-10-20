# Redux

- [**Notes**](#redux---notes)
- [**Resources**](#redux---resources)

## Redux - Notes

***Redux*** is a ***JavaScript*** library for managing the state of your application.

Big applications have big application states and managing them gets more and more inconvenient as your app grows. This is where state management libraries like ***Redux*** come in.

***Redux*** follows a pattern called “*Single Source Of Truth*”, which means that we have only one place (called **Store**) where we store the only state for the whole application.

To create a `react-redux` project:

    # Redux + JavaScript template
    npx create-react-app my-app --template redux

    # Redux + TypeScript template
    npx create-react-app my-app --template redux-typescript

***Redux*** has 3 main parts:

- [**Actions**](#actions)
- [**Reducers**](#reducers)
- [**Store**](#store)

### Actions

**Actions** are ***JavaScript*** objects that describe *WHAT* happened, but not *HOW* the app state changes.

We just send (dispatch) them to τhe **store** instance whenever we want to update the state of our application. The rest is handled by the **reducers**.

***Redux*** requires our **action** objects to contain a type field. This field is used to describe what kind of **action** we are dispatching and it should usually be a constant that you export from a file. More fields can be added in the **action** object and are completely up to the developer.

Example **action**:

    { type: ADD_NOTE, title: 'Some Title', content: 'This is an action object' }
This **action** in activated when the user clicks the "*Add Note*" button and informs the **store** that we want to add a new Note.

#### Action Creators

They are functions that generate and return plain ***JavaScript*** objects.

The above **action** can be written as

    function addNote(title, content) {
      return { type: ADD_NOTE, title: title, content: content };
    }

### Reducers

***Reducers*** are functions that define *HOW* the app state changes. In other words, they recalculate the new application state.

Whenever an **action** is dispatched to the **store**, the **action** gets passed to the **reducer**.

The **reducer** function takes two parameters:

- the previous app state
- the **action** being dispatched

It returns the new app state.

    (previousState, action) => newState
To deal with **reducer** complexity, we chunk them down in multiple, simpler **reducers** and later, we combine them with a ***Redux*** helper function called `combineReducers`.

The main reducer is conventionally called “*Root Reducer*”.

### Store

The **store** hold the state of the application.

It is actually an object, NOT a class.

It is possible to create multiple **stores**, this is against the pattern that ***Redux*** follows. We create only one **store** per application!

The values to be stored in it are completely up to the developer and they can be nested as much as needed.

### Setup example

A convenient ***Redux*** file tree setup is

    redux/
    |- actions/
    |  |- actions.js
    |- reducers/
    |  |- reducers.js
    |- store/
    |  |- store.js

## Redux - Resources

- [Redux documentation](https://redux.js.org/introduction/getting-started)
- [Redux CDN](https://cdnjs.com/libraries/redux)
- [Redux repository](https://github.com/reduxjs/redux)
- [Full Redux tutorial in 5 minutes by freeCodeCamp.org](https://youtu.be/oD3miHerQbY)
- [Introduction to Redux](https://javascript.plainenglish.io/the-only-introduction-to-redux-and-react-redux-youll-ever-need-8ce5da9e53c6)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-2021#full-stack-roadmap-2021) or [⬆ Back to top](#redux)
