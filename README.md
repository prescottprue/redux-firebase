# redux-firebase

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![Quality][quality-image]][quality-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Code Style][code-style-image]][code-style-url]
[![License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Backers on Open Collective][backers]](#backers)

[![Gitter][gitter-image]][gitter-url]


> Redux bindings for Firebase

## Why?

Provide Framework/library agnostic Firebase bindings for redux similar to those available in `react-redux-firebase` and other similar libraries.

## Features
- Integrated into redux
- Support for updating and nested props
- [Population capability](http://react-redux-firebase.com/docs/populate) (similar to mongoose's `populate` or SQL's `JOIN`)
- Out of the box support for authentication (with auto load user profile)
- Firebase Storage Support
- Support small data ( using `value` ) or large datasets ( using `child_added`, `child_removed`, `child_changed` )
- queries support ( `orderByChild`, `orderByKey`, `orderByValue`, `orderByPriority`, `limitToLast`, `limitToFirst`, `startAt`, `endAt`, `equalTo` right now )
- Automatic binding/unbinding
- Declarative decorator syntax for React components
- Tons of integrations including [`redux-thunk`](https://github.com/gaearon/redux-thunk) and [`redux-observable`](https://redux-observable.js.org/)
- Action Types and other Constants exported for external use (such as in `redux-observable`)
- Firebase v3+ support
- Server Side Rendering Support
- [`react-native` support](/docs/recipes/react-native.md) using [native modules](http://docs.react-redux-firebase.com/history/v2.0.0/docs/recipes/react-native.html#native-modules) or [web sdk](/docs/recipes/react-native.md#jsweb)

## Install

```bash
npm install --save redux-firebase
```

## Use

**Note:** If you are just starting a new project, you may want to use [`v2.0.0`](http://docs.react-redux-firebase.com/history/v2.0.0/#use) since it is has an even easier syntax. For clarity on the transition, view the [`v1` -> `v2` migration guide](http://docs.react-redux-firebase.com/history/v2.0.0/docs/v2-migration-guide.html)

Include `reactReduxFirebase` in your store compose function and  `firebaseStateReducer` in your reducers:

```javascript
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
import * as firebase from 'firebase'

// Add Firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseStateReducer
})

// Firebase config
const config = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  storageBucket: '<your-storage-bucket>'
}
const rfConfig = { userProfile: 'users' } // react-redux-firebase config

// initialize firebase instance
firebase.initializeApp(config) // <- new to v2.*.*

// Add reduxReduxFirebase to compose
const createStoreWithFirebase = compose(
  reduxFirebase(firebase, rfConfig), // firebase instance as first argument
)(createStore)

// Create store with reducers and initial state
const store = createStoreWithFirebase(rootReducer, initialState)
```


## Discussion

Join us on the [redux-firebase gitter](https://gitter.im/redux-firebase/Lobby).

## FAQ

1. How is this different than [`react-redux-firebase`](https://github.com/prescottprue/react-redux-firebase)?

  The future plan for is for `react-redux-firebase` to be powered by this library. `redux-firebase` will contain the redux specific internal logic which was originally created for `react-redux-firebase`. In this way, `redux-firebase` is front end framework agnostic,

1. How do I help?

  * Join the conversion on [gitter][gitter-url]
  * Post Issues
  * Create Pull Requests

[npm-image]: https://img.shields.io/npm/v/redux-firebase.svg?style=flat-square
[npm-url]: https://npmjs.org/package/redux-firebase
[npm-downloads-image]: https://img.shields.io/npm/dm/redux-firebase.svg?style=flat-square
[quality-image]: http://npm.packagequality.com/shield/redux-firebase.svg?style=flat-square
[quality-url]: https://packagequality.com/#?package=redux-firebase
[backers]:https://opencollective.com/redux-firebase/backers/badge.svg?style=flat-square&color=blue
[become-a-backer]:https://opencollective.com/redux-firebase#backer
[travis-image]: https://img.shields.io/travis/prescottprue/redux-firebase/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/prescottprue/redux-firebase
[daviddm-image]: https://img.shields.io/david/prescottprue/redux-firebase.svg?style=flat-square
[daviddm-url]: https://david-dm.org/prescottprue/redux-firebase
[climate-image]: https://img.shields.io/codeclimate/github/prescottprue/redux-firebase.svg?style=flat-square
[climate-url]: https://codeclimate.com/github/prescottprue/redux-firebase
[coverage-image]: https://img.shields.io/codecov/c/github/prescottprue/redux-firebase.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/prescottprue/redux-firebase
[license-image]: https://img.shields.io/npm/l/redux-firebase.svg?style=flat-square
[license-url]: https://github.com/prescottprue/redux-firebase/blob/master/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[code-style-url]: http://standardjs.com/
[gitter-image]: https://img.shields.io/gitter/room/redux-firebase/gitter.svg?style=flat-square
[gitter-url]: https://gitter.im/redux-firebase/Lobby
