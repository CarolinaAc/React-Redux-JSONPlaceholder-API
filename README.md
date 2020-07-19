# Random text app

Please use yarn to run the app and the tests.

## Requirements

The requirements for this task were:
[x] Create an interface that lists data from a public API of your choice.
[x] When pressing on an item in the list the app navigates to a detail page.
[ ] Add a button on the detail page to delete that item from the list (only locally).
[x] Add a button to shuffle the presentation of the items in the list.
[x] Use Redux for state management.
Instructions:
[x] Create a Github repository to host your code.
[x]. Generate a few unit tests using your favourite testing framework.

## Description

For this project I have used [JSONPlaceholder posts]('https://jsonplaceholder.typicode.com/posts/) fake API. I chose it to avoid having to get a user key, but it can be changed by any other API with minimum changes to the code.
For more information about the API, please click [here](https://jsonplaceholder.typicode.com/guide.html)

As this is a fake API, changes do not occur to the API but they are visible on Redux dev tools, thus the delete button will not show the changes on the title's list.

I used fetch to manage the API calls due to being more familiar with it, but axios can be a popular alternative.

For the shuffle function, I used Yates-Fisher shuffle, but I came across some libraries that would also work in react for it. This shuffle function is triggered locally and will revert when refreshing the page or coming back from the details page.

Using React-redux for this task was interesting, especially as I am not as used to it as I am to other alternatives like Context, but it does make sense to use Redux if the project gets bigger.

I also wanted to make use of Jest and enzyme, as you mentioned those are the ones you use for testing your applications at present, so I managed to make some tests for the three components available. Further testing would be beneficial, especially to test the redux store.

There are other libraries (like js cookie) that could be used in bigger projects to reassure that refreshing the page does not affect the information rendered.

Overall, it has been a great learning experience and I will keep updating this project.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
