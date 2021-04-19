## Problem statement

Create a simple customer management app that allows basic CRUD operations which include:

- Adding customer's first name, last name and date of birth
- Editing a customer
- Deleting a customer
- Searching for a customer by partial name match (first or last name)

## Solution

A Single Page Application was built using the following technical stack

Typescript
ReactJS
Redux, Redux Saga
Basic Jest tests
Use of components (preferably styled components, Formik for form)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the application

### Prerequisite

Install `yarn` using `npm`

### Running the application

To run the application, go to the project directory and run the following scripts

#### `yarn install`
Installs all the project dependencies

#### `yarn server`
Starts the mock json server. 
The initial data for the table is fetched from this json server. Make sure to start this before running the app using `yarn start`

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


