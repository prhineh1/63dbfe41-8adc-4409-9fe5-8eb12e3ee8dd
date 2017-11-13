# Crispy Commute

Crispy Commute takes input from the user regarding desired commute conditions in the D.C. Metro area, returning the forecast for the specified data and time and recommends riding a bike or the metro based on comparing the user's input with the forecast.

### Getting Started
This project requires [Node.js](https://nodejs.org/en/) and your preferred package manager ([yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/))

1. Install dependencies: `npm install` or `yarn`.

### Scripts

`start`
>starts an express server for the app (used for production builds)

`build:dev`
>equivalent to running the default `webpack` command

`build:prod`
>runs webpack in production mode with the `source-map` option enabled

`dev-server`
>runs the webpack dev-server with the `inline-source-map` option enabled

`test`
>runs test suite with `jest`
### Tooling

#### Testing
This app uses Enzyme to shallow render components for snapshot tests.

#### Babel
The [transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/) and [transform-object-rest-spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/) plugins help the development workflow. 

#### Redux-Saga
Redux-saga middleware uses javascript generator functions to handle side-effects (in this case, async calls to a third-party API). It has several advantages over Redux-Thunk, particularly when it comes to testing. See https://redux-saga.js.org/ for more info.

#### Dark Sky API
Weather forecasts are pulled from the `currently` data point off the Time Machine request. The `time` url parameter is a unix time-stamp. The app uses a proxy (https://1miudhz7a9.execute-api.us-east-1.amazonaws.com/dev/forecast/38.9072,77.0369) that allows CORS.

## Built With

* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Webpack](https://webpack.github.io/)
* [Jest](https://facebook.github.io/jest/)
* [Enzyme](http://airbnb.io/enzyme/)
* [Redux-saga](https://redux-saga.js.org/)
* [Dark Sky API](https://darksky.net/dev)
* [SASS/SCSS](http://sass-lang.com/)

### Third-party components

* [react-modal](https://github.com/reactjs/react-modal)
* [react-dates](https://github.com/airbnb/react-dates)
* [TimePicker](https://github.com/react-component/time-picker)
* [React Animated Weather](https://github.com/divyanshu013/react-animated-weather)
