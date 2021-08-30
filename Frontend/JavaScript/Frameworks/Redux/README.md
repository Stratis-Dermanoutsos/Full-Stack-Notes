# Redux

- **[Notes](#redux---notes)**
- **[Resources](#redux---resources)**

## Redux - Notes

***Redux*** is used mostly for *application state management*. To summarize it, ***Redux*** maintains the state of an entire application in a single immutable state tree (object), which can't be changed directly. When something changes, a new object is created (using **actions** and **reducers**).

Installation

- ***Redux* Toolkit**

      npm install @reduxjs/toolkit
  Redux Toolkit includes the Redux core, as well as other key packages we feel are essential for building Redux applications (such as Redux Thunk and Reselect).
- ***Redux* Core**

      npm install redux
- **Complementary Packages**

      npm install react-redux
      npm install --save-dev redux-devtools

Create a ***React Redux*** App

    npx create-react-app <project-directory> --template redux // with NPX
    create-react-app <project-directory> --template redux // with create-react-app CLI

## Redux - Resources

- [Redux documentation](https://redux.js.org/introduction)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-2021#full-stack-roadmap-2021) or [Back to top](#redux)
