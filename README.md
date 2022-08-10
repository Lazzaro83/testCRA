# Testing app for coding interview process

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and then slightly altered in order to fit the needs of this coding test.

## Available Scripts

For this coding test you do not need anything else but starting command:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### What is here already

You already have as a project dependencies in `package.json` the following npm packages:
1. [redux](https://redux.js.org/)
2. [reduxjs/toolkit](https://redux-toolkit.js.org/)
3. [react-redux](https://react-redux.js.org/)
4. [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
5. In `App.js` you have already a starter code with one input field for search functionality

## What should this application do?

This application after the following coding interview should have the following:
1. `Home Screen` where you would show the posts fetched from this [URL](https://62f2516c18493ca21f313743.mockapi.io/postapi)
    - For fetching you can use fetch API, axios or any other popular solution (React Query, SWR)
    - Fetched data should be placed in redux store and from there be used on `Home screen`
    - Each post should be in a separate distinctive "card". For this you can use any of the popular UI libraries or none at all.
2. `Search Screen` should appear after you have inserted and submitted a post title or author's name with filtered posts that match searched criteria. If no a single post matches search criteria, friendly user message should appear on that screen.
3. **If there is time** [CRUD](https://www.freecodecamp.org/news/crud-operations-explained/) operations should be implemented for this API.
    - First one to be implemented is DELETE operation. Make sure to remove post from the list of posts only after successful deletion response from the API
    - Second one should be POST. Data for post should come from form that needs to be created as a separate component(s). If this form should appear as a modal on the `Home screen` or on `Individual post` screen is up to you.
    - Order of other operations and how should they be represented in UI is up to you.

## Important info:
Implementing requirements number 1 and 2 is a **must** in order to complete this task. What is placed under requirement number 3 is just in case you have time, but you should focus mainly on completing first two tasks. **You have a right to install any additional dependencies either as a development dependency or as a "project" dependency**

# Good luck!!!
