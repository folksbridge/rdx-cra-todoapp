import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from './reducers'
import App from './components/App2'

import registerServiceWorker from './registerServiceWorker';
//import * as serviceWorker from './serviceWorker'

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer)

ReactDOM.render(<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'))

registerServiceWorker()
//serviceWorker.unregister()