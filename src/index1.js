import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose  } from 'redux'


import todoApp from './reducers'
import App from './components/App1'

//import registerServiceWorker from './registerServiceWorker'
import * as serviceWorker from './serviceWorker';

//const store = createStore(todoApp)
const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

//registerServiceWorker()
serviceWorker.unregister();